import MxObject = mendix.lib.MxObject;
import {iMendixObjectWrapper} from "./interfaces/iMendixObjectWrapper";
import {iBaseObjectService} from "../services/interfaces/iBaseObjectService";


export class MendixObjectWrapper<T extends iBaseObjectService> implements iMendixObjectWrapper {
    protected _mxOBJ!: MxObject;
    protected _objectService: T;


    constructor(mxOBJ: mendix.lib.MxObject, objectService: T) {
        this._mxOBJ = mxOBJ;
        this._objectService = objectService;
    }

    get mxOBJ(): MxObject {
        return this._mxOBJ;
    }

    get GUID(): string {
        return this._mxOBJ.getGuid();
    }

    commit(): Promise<void> {
        return this._objectService.commit(this)

    }

    delete(): Promise<void> {
        return this._objectService.delete(this)
    }


}
