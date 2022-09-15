import {MendixObjectWrapper} from "../src/wrappers/MendixObjectWrapper";
import {ApiController} from "../src/services/ApiController";
import {iMendixObjectWrapper} from "../src/wrappers/interfaces/iMendixObjectWrapper";

export interface IMendixObjectService extends ApiController {
    create(entityName: string): Promise<iMendixObjectWrapper>;

    getObject(GUID: string): Promise<iMendixObjectWrapper>;

    commit<T extends iMendixObjectWrapper>(mendixObjectWrapper: T): Promise<void>;

    commitAll<T extends iMendixObjectWrapper>(...mendixObjectWrapper: [T, ...T[]]): Promise<Awaited<void>[]>;

    delete<T extends iMendixObjectWrapper>(mendixObjectWrapper: T): Promise<void>;

    deleteAll<T extends iMendixObjectWrapper>(...mendixObjectWrappers: [T, ...T[]]): Promise<Awaited<void>[]>
}
