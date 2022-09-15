import {abstractMendixObjectService, MendixObjectService} from "./AbstractMendixObjectService";
import {iMendixFileWrapper} from "../../CUT THIS OUT FOR A WHILE/iMendixFileWrapper";
import {iMendixFileService} from "./interfaces/iMendixFileService";
import {iMendixObjectWrapper} from "../wrappers/interfaces/iMendixObjectWrapper";
import {MendixFileWrapper} from "../../CUT THIS OUT FOR A WHILE/MendixFileWrapper";
import {MendixObjectWrapper} from "../wrappers/MendixObjectWrapper";
import MxObject = mendix.lib.MxObject;

export class MendixFileService extends MendixObjectService implements iMendixFileService {
    async create(entityName: string, file?: File): Promise<iMendixFileWrapper> {
        const response: MxObject = await this.createMxObject(entityName);
        return new MendixFileWrapper(response, file);
    }

    async getObject(GUID: string): Promise<iMendixFileWrapper> {
        const response: MxObject = await this.createMxObject(GUID)

        return new MendixFileWrapper(response)
    }

    saveDocument(): void {

    }
}