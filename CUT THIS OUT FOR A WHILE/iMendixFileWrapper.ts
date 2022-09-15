import MxObject = mendix.lib.MxObject;
import {MendixObjectWrapper} from "../src/wrappers/MendixObjectWrapper";
import {iMendixObjectWrapper} from "../src/wrappers/interfaces/iMendixObjectWrapper";

export interface iMendixFileWrapper extends iMendixObjectWrapper{

    get file(): File;

    set file(file: File);
}
