import {action, makeObservable, observable} from "mobx";
import {contentsTextArr, farewellsTextArr, followsTextArr} from "../utils/questions.text";

export type QuestionsStoreProps = {
    store: QuestionsStore,
}
// export type QuestionsStoreProps = {
//     twitterId?: string,
//     twitterNickname?: string,
//     githubId?: string,
//     url1?: string,
//     url2?: string,
//     contents?: boolean[],
//     likes?: string[],
//     dislikes?: string[],
//     introduce?: string[],
//     follows?: boolean[],
//     farewells?: boolean[],
// }
//

export class QuestionsStore {
    @observable twitterId:string = "";
    @observable twitterNickname:string = "";
    @observable githubId:string = "";
    @observable url1:string = "";
    @observable url2:string = "";
    @observable contents:boolean[] = Array(contentsTextArr.length).fill(false);
    @observable likes:string = "";
    @observable dislikes:string = "";
    @observable introduce:string = "";
    @observable follows: boolean[] = Array(followsTextArr.length).fill(false);
    @observable farewells: boolean[] = Array(farewellsTextArr.length).fill(false);

    @action
    public updateTwitterId = (twitterId:string) => {
        this.twitterId = twitterId;
    }

    @action
    public updateTwitterNickname = (twitterNickname:string) => {
        this.twitterNickname = twitterNickname;
    }

    @action
    public updateGithubId = (githubId:string) => {
        this.githubId = githubId;
    }

    @action
    public updateUrl1 = (url1:string) => {
        this.url1 = url1;
    }

    @action
    public updateUrl2 = (url2:string) => {
        this.url2 = url2;
    }

    @action
    public updateContent = (idx:number, value:boolean) => {
        this.contents[idx] = value;
    }

    @action
    public updateLikes = (likes: string) => {
        this.likes = likes;
    }

    @action
    public updateDislikes = (dislikes: string) => {
        this.dislikes = dislikes;
    }

    @action
    public updateIntroduce = (introduce: string) => {
        this.introduce = introduce;
    }

    @action
    public updateFollow = (idx:number, value:boolean) => {
        this.follows[idx] = value;
    }

    @action
    public updateFarewell = (idx:number, value:boolean) => {
        this.farewells[idx] = value;
    }


    constructor() {
        makeObservable(this);
    }
}
