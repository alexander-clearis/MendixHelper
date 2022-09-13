import MxObject = mendix.lib.MxObject;
import {APICall} from "./API/APICall";

interface iMendixObjectHelper {
    get mxOBJ(): MxObject;
    get GUID(): string;
    create(entityName: string): Promise<this>;
}


export class MendixObjectHelper implements iMendixObjectHelper {
    private _mxOBJ!: MxObject;

    async create(entityName: string): Promise<this> {
        await this.createMxObject(entityName)
            .then(obj => {
                this._mxOBJ = obj;
            });
        return this;
    }

    get mxOBJ(): MxObject {
        return this._mxOBJ;
    }

    get GUID(): string {
        return this._mxOBJ.getGuid();
    }

    private createMxObject(entityName: string): Promise<MxObject> {
        return APICall.returnMxObject((resolve, reject) => {
            mx.data.create({entity: entityName, callback: resolve, error: reject});
        });
    }
}
