import {abstractMendixAction} from "./interfaces/abstractMendixAction";
import {iMendixAction} from "./interfaces/iMendixAction";
import {iMendixObjectWrapper} from "./interfaces/iMendixObjectWrapper";
import {MendixObjectWrapper} from "./MendixObjectWrapper";

export class MendixActionWithParams<ParameterType extends iMendixObjectWrapper | undefined> extends abstractMendixAction implements iMendixAction {
    private _parameterWrappers: ParameterType[] = [];
    private _addedSingles: string[] = [];
    private _GUIDS: string [] = [];

    constructor(name: string)
    constructor(name: string, parameters: ParameterType[])
    constructor(name: string, parameters: string[])
    constructor(name: string, ...parameters: (string | ParameterType)[]) {
        super(name);
        this.initParams(parameters)
    }

    private initParams(parameters: (string | ParameterType)[]) {
        if (parameters.length > 0) {
            for (const param of parameters) {
                if (typeof param !== "string") {
                    this._parameterWrappers.push(param);
                } else {
                    this._addedSingles.push(param);
                }
            }
        }
    }


    protected getParams(): { actionname: string; applyto: string; guids: string[]; } {
        return {actionname: this._name, applyto: "selection", guids: this._GUIDS};
    }

    execute(): Promise<this> {
        return this.buildAndExecuteMendixAction();
    }

    protected main(): void {
        new MendixActionWithParams("test",)
    }
}