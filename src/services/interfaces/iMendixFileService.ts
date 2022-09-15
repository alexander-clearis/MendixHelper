import {abstractMendixObjectService} from "../AbstractMendixObjectService";
import {iMendixFileWrapper} from "../../../CUT THIS OUT FOR A WHILE/iMendixFileWrapper";

export interface iMendixFileService extends abstractMendixObjectService{
    saveDocument(): void;
}