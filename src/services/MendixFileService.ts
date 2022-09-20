import {BaseObjectService} from "./BaseObjectService";
import {iMendixFileService} from "./interfaces/iMendixFileService";
import {iMendixFileWrapper} from "../wrappers/interfaces/iMendixFileWrapper";
import {MendixFileWrapper} from "../wrappers/MendixFileWrapper";

export class MendixFileService extends BaseObjectService implements iMendixFileService {
    async create(file: File): Promise<iMendixFileWrapper>;
    async create(file: File, entityName?: string): Promise<iMendixFileWrapper> {
        if (entityName === undefined) {
            const mxObj = await this.createMxObject("System.FileDocument")
            return new MendixFileWrapper(mxObj, this, file)
        } else {
            const mxObj = await this.createMxObject(entityName);
            return new MendixFileWrapper(mxObj, this, file)
        }
    }

    uploadDocument(MendixFileWrapper: iMendixFileWrapper): Promise<boolean> {
        return this.uploadFileToMendix(MendixFileWrapper);
    }

    protected uploadFileToMendix(fileWrapper: iMendixFileWrapper): Promise<true> {
        return new Promise((resolve, reject) => {
            mx.data.saveDocument(fileWrapper.GUID, fileWrapper.file.name, {}, fileWrapper.file, () => resolve(true),() => reject(false));
        })
    }

}