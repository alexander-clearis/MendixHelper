import {abstractMendixAction} from "./interfaces/abstractMendixAction";
import {iMendixAction} from "./interfaces/iMendixAction";
import {iMendixObjectWrapper} from "./interfaces/iMendixObjectWrapper";

export class MendixActionWithParams<ParameterType extends iMendixObjectWrapper | undefined> extends abstractMendixAction implements iMendixAction {
    protected ParameterWrappers: ParameterType[] = [];
    protected addedSingles: string[] = [];
    protected _GUIDS: string [] = [];

    constructor(name: string)
    constructor(name: string, parameters: ParameterType[])
    constructor(name: string, parameters: string[])
    constructor(name: string, ...parameters: (string | ParameterType)[]) {
        super(name);
        if (parameters) {
            if (typeof parameters[0] === "string") {
                this.addedSingles.concat()
            }
            else if (parameters[0] extends iMendixObjectWrapper) {
                this.addedSingles.concat()
            }
        }
    }

    private refreshGUIDS(): void {

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