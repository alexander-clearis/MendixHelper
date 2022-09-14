import {MendixObjectWrapperController} from "./MendixObjectWrapperController";
import {iMendixFileWrapper} from "../wrappers/interfaces/iMendixFileWrapper";
import {iMendixFileWrapperController} from "./interfaces/iMendixFileWrapperController";
import {iMendixObjectWrapper} from "../wrappers/interfaces/iMendixObjectWrapper";

export class MendixFileWrapperController extends MendixObjectWrapperController implements iMendixFileWrapperController{

    async create(entityName?: string): Promise<iMendixObjectWrapper> {

        return super.create(typeof entityName === "string" ? entityName : "System.FileDocument");
    }
}
MendixFileWrapperController.instance.