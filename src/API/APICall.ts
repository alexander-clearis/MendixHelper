import MxObject = mendix.lib.MxObject;

export class APICall {
    //Always log error if returned.

    private static returnPromise<T>(
        callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void
    ): Promise<T> {
        return new Promise<T>((resolve: (value: T) => void, reject: (e: Error) => void) => {
            callMe(resolve, (e: Error) => { console.log(e); reject(e);});
        });
    }

    static returnVoid<T = void>(callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void): Promise<T> {
        return this.returnPromise<T>(callMe);
    }

    static returnBoolean<T = boolean>(callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void): Promise<T> {
        return this.returnPromise<T>(callMe);
    }

    static returnMxObject<T = MxObject>(callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void): Promise<T> {
        return this.returnPromise<T>(callMe);
    }
}
//
// function returnPromise<T>(
//     callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void
// ): Promise<T> {
//     return new Promise<T>((resolve: (value: T) => void, reject: (e: Error) => void) => {
//         callMe(resolve, reject);
//     });
// }
//
// function returnVoid<T = void>(callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void): Promise<T> {
//     return returnPromise<T>(callMe);
// }
//
// function returnBoolean<T = boolean>(callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void): Promise<T> {
//     return returnPromise<T>(callMe);
// }
//
// function returnMxObject<T = MxObject>(callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void): Promise<T> {
//     return returnPromise<T>(callMe);
// }