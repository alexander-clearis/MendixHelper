import MxObject = mendix.lib.MxObject;
import {iMendixObjectWrapper} from "./interfaces/iMendixObjectWrapper";


export class MendixObjectWrapper implements iMendixObjectWrapper {
    private _mxOBJ!: MxObject;

    constructor(mxOBJ: mendix.lib.MxObject) {
        this._mxOBJ = mxOBJ;
    }

    get mxOBJ(): MxObject {
        return this._mxOBJ;
    }

    get GUID(): string {
        return this._mxOBJ.getGuid();
    }

    commit(): Promise<void> {
        return Promise.resolve(undefined)

    }

    delete(): Promise<void> {
        return Promise.resolve(undefined)
    }


}
