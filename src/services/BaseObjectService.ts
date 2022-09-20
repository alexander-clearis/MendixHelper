import MxObject = mendix.lib.MxObject;
import {ApiController} from "./ApiController";
import {iMendixObjectWrapper} from "../wrappers/interfaces/iMendixObjectWrapper";
import {iBaseObjectService} from "./interfaces/iBaseObjectService";

export class BaseObjectService extends ApiController implements iBaseObjectService {
    async commit(mendixObjectWrapper: iMendixObjectWrapper): Promise<void> {
        return this.commitMxObject(mendixObjectWrapper);
    }

    async commitAll(...mendixObjectWrapper: [iMendixObjectWrapper, ...iMendixObjectWrapper[]]): Promise<Awaited<void>[]> {
        return this.commitAllMxObjects(...mendixObjectWrapper);
    }

    async delete(mendixObjectWrapper: iMendixObjectWrapper): Promise<void> {
        return this.removeMxObject(mendixObjectWrapper.GUID);
    }

    async deleteAll(...mendixObjectWrapper: [iMendixObjectWrapper, ...iMendixObjectWrapper[]]): Promise<Awaited<void>[]> {
        return this.removeAllMxObjects(...BaseObjectService.wrappersToGUIDS(...mendixObjectWrapper));
    }

    //Helpers
    protected static wrappersToGUIDS(...mendixObjectWrapper: [iMendixObjectWrapper, ...iMendixObjectWrapper[]]): string[];
    protected static wrappersToGUIDS(...mendixObjectWrapper: iMendixObjectWrapper[]): string [] {
        return mendixObjectWrapper.map(mendixObjectWrapper => {
            return mendixObjectWrapper.GUID
        })
    }

    //API services
    protected createMxObject(entityName: string): Promise<MxObject> {
        return this.newAPIPromise<MxObject>((resolve, reject) => {
            mx.data.create({entity: entityName, callback: resolve, error: reject});
        });
    }

    protected get(GUID: string): Promise<MxObject> {
        return this.newAPIPromise<MxObject>((resolve, reject) => {
            mx.data.get({guid: GUID, callback: resolve, error: reject});
        });
    }

    protected commitAllMxObjects(...mendixObjectWrapper: iMendixObjectWrapper[]): Promise<Awaited<void>[]> {
        return Promise.all(mendixObjectWrapper.map(i => this.commitMxObject(i)));
    }

    protected commitMxObject(mendixObjectWrapper: iMendixObjectWrapper): Promise<void> {
        return this.newAPIPromise<void>((resolve, reject) => {
            mx.data.commit({mxobj: mendixObjectWrapper.mxOBJ, callback: resolve, error: reject});
        })
    }

    protected removeAllMxObjects(...GUIDS: string[]): Promise<Awaited<void>[]> {
        return Promise.all(GUIDS.map(i => this.removeMxObject(i)));
    }

    protected removeMxObject(GUID: string): Promise<void> {
        return this.newAPIPromise<void>((resolve, reject) => {
            mx.data.remove({guid: GUID, callback: resolve, error: reject});
        })
    }
}


