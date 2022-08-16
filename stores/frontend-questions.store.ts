import {action, computed, makeObservable, observable} from "mobx";
import {QuestionsStore} from "./questions.store";
import {FrontendStacks} from "../utils/stacks.constant";
import {developmentsContentsTextArr} from "../utils/questions.text";

export type FrontendQuestionsStoreTypes = {
    store: FrontendQuestionsStore,
}

export class FrontendQuestionsStore extends QuestionsStore {
    @observable frontendStacks:number[] = Array(FrontendStacks.length).fill(false);
    @observable frontendCounts:number = 0;

    @computed
    get selectedFrontendStacks (): number[] {
        let selectedStacksArr:number[] = [];
        let arrForSort = [];
        for (let i = 0; i < FrontendStacks.length; i++) {
            if (this.frontendStacks[i] > 0) {
                arrForSort.push([this.frontendStacks[i], i]);
            }
        }
        arrForSort = arrForSort.sort((a, b)=>(a[0] - b[0]));
        arrForSort.map((value, idx) => {
           selectedStacksArr.push(value[1]);
        });
        return selectedStacksArr;
    }

    @action
    public updateOrder = (idx: number) => {
        if (this.frontendStacks[idx] <= 1) return;
        for (let i = 0; i < FrontendStacks.length; i++) {
            if (this.frontendStacks[i] === this.frontendStacks[idx]-1) {
                this.frontendStacks[i] += 1;
            }
        }
        this.frontendStacks[idx] -= 1;
    }

    @action
    public updateFrontendStacks = (idx:number, value:boolean) => {
        this.frontendCounts += (value?1:-1);
        if (!value) {
            for (let i = 0; i < FrontendStacks.length; i++) {
                if (this.frontendStacks[i] > this.frontendStacks[idx]) {
                    this.frontendStacks[i] -= 1;
                }
            }
        }
        this.frontendStacks[idx] = (value?this.frontendCounts:0);
    }

    constructor() {
        super({
            contentsLength: developmentsContentsTextArr.length,
        });
        makeObservable(this);
    }
}
