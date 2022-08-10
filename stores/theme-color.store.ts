import {action, makeObservable, observable} from "mobx";

export class ThemeColorStore  {
    @observable main:string = "#1D9BF0";
    no:string = "#777777";

    @action
    public updateThemeColorMain = (main:string) => {
        this.main = main;
    }

    constructor() {
        makeObservable(this);
    }
}
