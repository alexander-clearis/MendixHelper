import {MendixObjectWrapper} from "../../wrappers/MendixObjectWrapper";

export interface iMendixObjectWrapperController {
    create(entityName: string): Promise<MendixObjectWrapper>;

    getObject(GUID: string): Promise<MendixObjectWrapper>;

    commit(mendixObjectWrapper: MendixObjectWrapper): Promise<void>;

    commitAll(...mendixObjectWrapper: [MendixObjectWrapper, ...MendixObjectWrapper[]]): Promise<Awaited<void>[]>;

    delete(mendixObjectWrapper: MendixObjectWrapper): Promise<void>;

    deleteAll(...mendixObjectWrappers: [MendixObjectWrapper, ...MendixObjectWrapper[]]): Promise<Awaited<void>[]>
}
