import Sort = mx.Sort;
import {iMendixAction} from "./iMendixAction";
import MxObject = mendix.lib.MxObject;
import {iMendixObjectWrapper} from "./iMendixObjectWrapper";
import array = require("mxui/dom");


export abstract class abstractMendixAction<ExpectedTResult extends string | number | boolean | iMendixObjectWrapper | iMendixObjectWrapper[]> implements iMendixAction<ExpectedTResult> {
    protected _name: string;
    protected _origin?: mxui.lib.form._FormBase;
    protected _response!: ExpectedTResult;

    protected constructor(name: string) {
        this._name = name;
    }

    abstract execute(): Promise<this>;

    result(): ExpectedTResult {
        return this._response;
    }


    protected abstract getParams(): {
        actionname: string,
        applyto: string,
        guids?: string[],
        xpath?: string,
        constraints?: string,
        sort?: Sort[],
    };

    protected buildAndExecuteMendixAction(): Promise<this> {
        return new Promise((resolve, reject) => {
            mx.data.action({
                params: this.getParams(),
                origin: this._origin,
                callback: (result) => {
                    if (result instanceof MxObject) {
                        this._response = this.mxObjResToMxWrapper(result);
                    } else if (Array.isArray(result)) {
                        this._response = this.mxObjResToMxWrapper(result);
                    }
                    resolve(this);
                },
                error: (error) => {
                    reject(error)
                },
                onValidation: function (validations) {
                    alert("There were " + validations.length + " validation errors");
                }
            });

        })
    }

    protected abstract mxObjResToMxWrapper(MxObj: MxObject): iMendixObjectWrapper;

    protected eResultIsString(string: any): string is ExpectedTResult {
        return (string as ExpectedTResult) !== undefined;
    }

    // string | number | boolean |
    protected extractResult = (response: boolean | string | number | MxObject | MxObject[]): ExpectedTResult => {
        if (typeof response === "string") {
            if (this.eResultIsString(response)) {
                this._response = response;
            }
        } else if (typeof response === "number") {
            return response
        } else if (typeof response === "boolean") {
            return response;
        } else {
            const error: string = "Type mismatch: ExpectedTypeResult for " + this._name + " is " + typeof this + " but recieved a " + typeof response;
            throw new Error(error)
        }
    };

    public getResult<ExpectedTResult>(): ExpectedTResult {
        return "kaas";
    }
}

type Result<T> = T extends iMendixAction<infer R> ? R extends string ? "string" : "boolean";