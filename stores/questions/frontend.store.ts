import {action, computed, makeObservable, observable} from "mobx";
import {QuestionsStore} from "../questions.store";
import {FrontendStacks} from "../../utils/stacks.constant";
import {developmentsContentsTextArr} from "../../utils/questions.text";

export type FrontendQuestionsStoreTypes = {
    store: FrontendStore,
}

export class FrontendStore extends QuestionsStore {
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
    public updateByIdx = (pastIdx:number, newIdx?:number) => {
        const pastOrder = this.frontendStacks[pastIdx];
        if (newIdx===undefined) {
            this.frontendStacks[pastIdx] = 0;
            for (let i = 0; i < FrontendStacks.length; i++) {
                if (this.frontendStacks[i] > pastOrder) {
                    this.frontendStacks[i] -= 1;
                }
            }
        }
        else {
            this.frontendStacks[pastIdx] = this.frontendStacks[newIdx];
            this.frontendStacks[newIdx] = pastOrder;
        }
    }

    @action
    public updateFrontendStacks = (idx:number, value?:boolean) => {
        if (idx < 0) return;
        if (value === undefined) {
            value = !(this.frontendStacks[idx] > 0);
        }
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
