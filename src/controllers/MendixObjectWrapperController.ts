import MxObject = mendix.lib.MxObject;
import {MendixObjectWrapper} from "../wrappers/MendixObjectWrapper";
import {ApiController} from "./ApiController";
import {iMendixObjectWrapper} from "../wrappers/interfaces/iMendixObjectWrapper";

export interface iMendixObjectWrapperController {
    create(entityName: string): Promise<iMendixObjectWrapper>;

    getObject(GUID: string): Promise<iMendixObjectWrapper>;

    commit(mendixObjectWrapper: iMendixObjectWrapper): Promise<void>;

    commitAll(...mendixObjectWrapper: [iMendixObjectWrapper, ...iMendixObjectWrapper[]]): Promise<Awaited<void>[]>;

    delete(mendixObjectWrapper: MendixObjectWrapper): Promise<void>;

    deleteAll(...mendixObjectWrappers: [iMendixObjectWrapper, ...iMendixObjectWrapper[]]): Promise<Awaited<void>[]>
}

export class MendixObjectWrapperController extends ApiController implements iMendixObjectWrapperController{
    //Always log error if returned.
    private static _instance: iMendixObjectWrapperController;

    public static get instance(): iMendixObjectWrapperController {
        return this._instance || (this._instance = new MendixObjectWrapperController());
    };

    protected constructor() {
        super();
    }


    async create(entityName: string): Promise<iMendixObjectWrapper> {
        const response: MxObject = await this.createMxObject(entityName)
        return new MendixObjectWrapper(response)
    }

    async getObject(GUID: string): Promise<iMendixObjectWrapper> {
        const response: MxObject = await this.createMxObject(GUID)
        return new MendixObjectWrapper(response)
    }


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
        return this.removeAllMxObjects(...MendixObjectWrapperController.wrappersToGUIDS(...mendixObjectWrapper));
    }

    //Helpers
    protected static wrappersToGUIDS(...mendixObjectWrapper: [iMendixObjectWrapper, ...iMendixObjectWrapper[]]): string[];
    protected static wrappersToGUIDS(...mendixObjectWrapper: iMendixObjectWrapper[]): string [] {
        return mendixObjectWrapper.map(mendixObjectWrapper => {
            return mendixObjectWrapper.GUID
        })
    }

    //API controllers
    private createMxObject(entityName: string): Promise<MxObject> {
        return this.newAPIPromise<MxObject>((resolve, reject) => {
            mx.data.create({entity: entityName, callback: resolve, error: reject});
        });
    }

    private get(GUID: string): Promise<MxObject> {
        return this.newAPIPromise<MxObject>((resolve, reject) => {
            mx.data.get({guid: GUID, callback: resolve, error: reject});
        });
    }

    private commitAllMxObjects(...mendixObjectWrapper: iMendixObjectWrapper[]): Promise<Awaited<void>[]> {
        return Promise.all(mendixObjectWrapper.map(i => this.commitMxObject(i)));
    }

    private commitMxObject(mendixObjectWrapper: iMendixObjectWrapper): Promise<void> {
        return this.newAPIPromise<void>((resolve, reject) => {
            mx.data.commit({mxobj: mendixObjectWrapper.mxOBJ, callback: resolve, error: reject});
        })
    }

    private removeAllMxObjects(...GUIDS: string[]): Promise<Awaited<void>[]> {
        return Promise.all(GUIDS.map(i => this.removeMxObject(i)));
    }

    private removeMxObject(GUID: string): Promise<void> {
        return this.newAPIPromise<void>((resolve, reject) => {
            mx.data.remove({guid: GUID, callback: resolve, error: reject});
        })
    }
}


