import {iMendixObjectService} from "./interfaces/iMendixObjectService";
import {BaseObjectService} from "./BaseObjectService";
import {iMendixObjectWrapper} from "../wrappers/interfaces/iMendixObjectWrapper";
import {MendixObjectWrapper} from "../wrappers/MendixObjectWrapper";
import MxObject = mendix.lib.MxObject;

export class MendixObjectService extends BaseObjectService implements iMendixObjectService {

    async create(enityName: string): Promise<iMendixObjectWrapper> {
        const response: MxObject = await this.createMxObject(enityName)
        return new MendixObjectWrapper(response, this)
    }
    async getObject(GUID: string): Promise<iMendixObjectWrapper> {
        const response: MxObject = await this.get(GUID)
        return new MendixObjectWrapper(response, this)
    }

}