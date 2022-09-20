import { abstractMendixAction } from "./abstractMendixAction";
import Sort = mx.Sort;

export interface iMendixAction extends abstractMendixAction {
    execute(): Promise<this>;

    getParams(): {
        actionname: string,
        applyto: string,
        guids?: string[],
        xpath?: string,
        constraints?: string,
        sort?: Sort[],
        gridid?: string
    };
}