import Sort = mx.Sort;

export abstract class abstractMendixAction {
    protected _name: string;
    protected _origin?: mxui.lib.form._FormBase;

    protected constructor(name: string) {
        this._name = name;
    }

    protected abstract getParams(): {
        actionname: string,
        applyto: string,
        guids?: string[],
        xpath?: string,
        constraints?: string,
        sort?: Sort[],
        gridid?: string
    };

    protected buildAndExecuteMendixAction(): Promise<this> {
        return new Promise((resolve, reject) => {
            mx.data.action({
                params: this.getParams(),
                origin: this._origin,
                callback: () => {
                    resolve(this);
                },
                error: (error) => {
                    reject(error)
                },
                onValidation: function (validations) {
                    alert("There were " + validations.length + " validation errors");
                }
            });

        })
    }
}