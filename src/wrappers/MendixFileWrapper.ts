import {MendixObjectWrapper} from "./MendixObjectWrapper";
import MxObject = mendix.lib.MxObject;
import {iMendixFileWrapper} from "./interfaces/iMendixFileWrapper";
import {iMendixFileService} from "../services/interfaces/iMendixFileService";
import {MendixFileService} from "../services/MendixFileService";
import {MendixObjectService} from "../services/MendixObjectService";

export class MendixFileWrapper extends MendixObjectWrapper<MendixFileService> implements iMendixFileWrapper {
    private _file: File;

    constructor(mxObj: MxObject, objectService: MendixFileService, file: File) {
        super(mxObj, objectService);
        this._file = file;

    }

    get file(): File {
        return this._file;
    }

    set file(value: File) {
        this._file = value;
    }

    upload(): Promise<boolean> {
        return this._objectService.uploadDocument(this);
    }

    uploadAndCommit(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._objectService.uploadDocument(this).then(() => {
                this.commit().then(() => resolve(true)).catch(() => resolve(false));
                resolve(true);
            }).catch(() => reject(false));
        })
    }
}