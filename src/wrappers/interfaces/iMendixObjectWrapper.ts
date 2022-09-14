import MxObject = mendix.lib.MxObject;

export interface iMendixObjectWrapper {
    get mxOBJ(): MxObject;
    get GUID(): string;

    commit(): Promise<void>;
    delete(): Promise<void>;
}