import {action, makeObservable, observable} from "mobx";
import {CreateMenuEnum} from "../types";


export class CreateMenuStore {
    @observable menu:CreateMenuEnum = CreateMenuEnum.INDEX;
    @action
    public update = (menu: CreateMenuEnum) => {
        console.log('update', menu);
        this.menu = menu;
    }
    constructor() {
        makeObservable(this);
    }
}
