import MxObject = mendix.lib.MxObject;
import {iMendixObjectWrapper} from "../wrappers/interfaces/iMendixObjectWrapper";
import {iMendixAction} from "../wrappers/interfaces/iMendixAction";


type ExpectedResult<T> = T extends string
    ? "string"
    : T extends number
        ? "number"
        : T extends boolean
            ? "boolean"
            : T extends iMendixObjectWrapper
                ? "MendixObjectWrapper"
                : "MendixObjectWrapperArray";