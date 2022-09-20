import {abstractMendixAction} from "./interfaces/abstractMendixAction";
import Sort = mx.Sort;
import {iMendixAction} from "./interfaces/iMendixAction";

export class MendixXPathAction extends abstractMendixAction implements iMendixAction{
    protected _xPath: string;
    protected _constraints?: string;
    protected _sort?: Sort[];

    constructor(name: string, xPath: string, constraints?: string, sort?: Sort[]) {
        super(name);
        this._xPath = xPath;
        this._constraints = constraints;
        this._sort = sort;
    }

    protected getParams(): { actionname: string; applyto: string; xpath: string; constraints?: string; sort?: mx.Sort[] } {
        return {
            actionname: this._name,
            applyto: "set",
            xpath: this._xPath,
            constraints: this._constraints,
            sort: this._sort
        };
    }

    execute(): Promise<this> {
        return this.buildAndExecuteMendixAction();
    }

}