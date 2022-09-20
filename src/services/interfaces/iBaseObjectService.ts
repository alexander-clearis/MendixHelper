import {MendixObjectWrapper} from "../../wrappers/MendixObjectWrapper";
import {ApiController} from "../ApiController";
import {iMendixObjectWrapper} from "../../wrappers/interfaces/iMendixObjectWrapper";

export interface iBaseObjectService extends ApiController {
    commit<T extends iMendixObjectWrapper>(mendixObjectWrapper: T): Promise<void>;

    commitAll<T extends iMendixObjectWrapper>(...mendixObjectWrapper: [T, ...T[]]): Promise<Awaited<void>[]>;

    delete<T extends iMendixObjectWrapper>(mendixObjectWrapper: T): Promise<void>;

    deleteAll<T extends iMendixObjectWrapper>(...mendixObjectWrappers: [T, ...T[]]): Promise<Awaited<void>[]>
}
