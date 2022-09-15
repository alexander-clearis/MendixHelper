import {MendixObjectWrapper} from "../src/wrappers/MendixObjectWrapper";
import MxObject = mendix.lib.MxObject;
import {iMendixFileWrapper} from "./iMendixFileWrapper";
import {iMendixFileService} from "../src/services/interfaces/iMendixFileService";

export class MendixFileWrapper extends MendixObjectWrapper implements iMendixFileWrapper {
    private _file: File;

    constructor(mxObj: MxObject, file?: File) {
        super(mxObj);
        this._file = file;
    }

    get file(): File {
        return this._file;
    }

    set file(value: File) {
        this._file = value;
    }
}