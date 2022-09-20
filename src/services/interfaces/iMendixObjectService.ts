import { BaseObjectService } from "../BaseObjectService";
import {iMendixObjectWrapper} from "../../wrappers/interfaces/iMendixObjectWrapper";
import {ApiController} from "../ApiController";

export interface iMendixObjectService extends BaseObjectService {
    getObject(GUID: string): Promise<iMendixObjectWrapper>;

    create(entityName: string): Promise<iMendixObjectWrapper>;
}