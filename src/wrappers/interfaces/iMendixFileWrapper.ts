import MxObject = mendix.lib.MxObject;
import {MendixObjectWrapper} from "../MendixObjectWrapper";
import {iMendixObjectWrapper} from "./iMendixObjectWrapper";

export interface iMendixFileWrapper extends iMendixObjectWrapper{

    get file(): File;

    set file(file: File);

    upload(): Promise<boolean>;

    uploadAndCommit(): Promise<boolean>;
}
