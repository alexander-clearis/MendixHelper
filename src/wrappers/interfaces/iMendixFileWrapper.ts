import MxObject = mendix.lib.MxObject;
import {MendixObjectWrapper} from "../MendixObjectWrapper";

export interface iMendixFileWrapper {

    get file(): File;

    set file(file: File);
}
