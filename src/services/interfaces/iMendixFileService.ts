import {BaseObjectService} from "../BaseObjectService";
import {iMendixFileWrapper} from "../../wrappers/interfaces/iMendixFileWrapper";

export interface iMendixFileService extends BaseObjectService {

    create(file: File): Promise<iMendixFileWrapper>;
    create(file: File, entityName: string): Promise<iMendixFileWrapper>;
    uploadDocument(MendixFileWrapper: iMendixFileWrapper): Promise<boolean>;
}