import {action, makeObservable, observable} from "mobx";
import {CreateMenuEnum} from "../types";


export class CreateMenuStore {
    @observable menu:CreateMenuEnum = CreateMenuEnum.INDEX;
    @action
    public update = (menu: CreateMenuEnum) => {
        this.menu = menu;
    }
    constructor() {
        makeObservable(this);
    }
}
