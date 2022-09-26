import {abstractMendixAction} from "./interfaces/abstractMendixAction";
import {iMendixAction} from "./interfaces/iMendixAction";

export class MendixAction extends abstractMendixAction<Param> implements iMendixAction {
    execute(): Promise<this> {
        return this.buildAndExecuteMendixAction();
    }

    protected getParams(): { actionname: string; applyto: string; } {
        return {actionname: this._name, applyto: "none"};
    }

}