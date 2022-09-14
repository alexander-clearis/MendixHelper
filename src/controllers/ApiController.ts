export class ApiController {
    protected newAPIPromise<T>(
        callMe: (resolve: (value: T) => void, reject: (e: Error) => void) => void
    ): Promise<T> {
        return new Promise<T>((resolve: (value: T) => void, reject: (e: Error) => void) => {
            callMe(resolve, (e: Error) => {
                console.log(e);
                reject(e);
            });
        });
    }
}