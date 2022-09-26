import { abstractMendixAction } from "./abstractMendixAction";
import Sort = mx.Sort;
import {iMendixObjectWrapper} from "./iMendixObjectWrapper";

export interface iMendixAction<ExpectedTResult extends string | number | boolean | iMendixObjectWrapper | iMendixObjectWrapper[]> {
    execute(): Promise<this>;
    result(): ExpectedTResult;
}