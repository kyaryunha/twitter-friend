import {action, makeObservable, observable} from "mobx";
import {contentsTextArr, farewellsTextArr, followsTextArr} from "../components/create-template/questions.util";

export type QuestionsStoreProps = {
    twitterId?: string,
    twitterNickname?: string,
    bojId?: string,
    codeforcesId?: string,
    atcoderId?: string,
    githubId?: string,
    solvedacTier?: string,
    url1?: string,
    url2?: string,
    contents?: object,
    fields?: object,
    introduce?: string,
    follows?: object,
    farewells?: object,
}

export class QuestionsStore {
    @observable twitterId:string = "";
    @observable twitterNickname:string = "";
    @observable bojId:string = "";
    @observable codeforcesId:string = "";
    @observable atcoderId: string = "";
    @observable solvedacTier: string = "";
    @observable githubId:string = "";
    @observable url1:string = "";
    @observable url2:string = "";
    @observable contents:object = Array(contentsTextArr.length).fill(false);
    @observable fields:object = [];
    @observable introduce:string = "";
    @observable follows: object = Array(followsTextArr.length).fill(false);
    @observable farewells: object = Array(farewellsTextArr.length).fill(false);
    @action
    public update = (answers:QuestionsStoreProps) => {
        if (answers.hasOwnProperty('twitterId') && typeof answers.twitterId === "string") this.twitterId = answers.twitterId;
        if (answers.hasOwnProperty('twitterNickname') && typeof answers.twitterNickname === "string") this.twitterNickname = answers.twitterNickname;
        if (answers.hasOwnProperty('bojId') && typeof answers.bojId === "string") this.bojId = answers.bojId;
        if (answers.hasOwnProperty('codeforcesId') && typeof answers.codeforcesId === "string") this.codeforcesId = answers.codeforcesId;
        if (answers.hasOwnProperty('atcoderId') && typeof answers.atcoderId === "string") this.atcoderId = answers.atcoderId;
        if (answers.hasOwnProperty('solvedacTier') && typeof answers.solvedacTier === "string") this.solvedacTier = answers.solvedacTier;
        if (answers.hasOwnProperty('githubId') && typeof answers.githubId === "string") this.githubId = answers.githubId;
        if (answers.hasOwnProperty('url1') && typeof answers.url1 === "string") this.url1 = answers.url1;
        if (answers.hasOwnProperty('url2') && typeof answers.url2 === "string") this.url2 = answers.url2;
        if (answers.hasOwnProperty('contents') && typeof answers.contents === "object") this.contents = answers.contents;
        if (answers.hasOwnProperty('fields') && typeof answers.fields === "object") this.fields = answers.fields;
        if (answers.hasOwnProperty('introduce') && typeof answers.introduce === "string") this.introduce = answers.introduce;
        if (answers.hasOwnProperty('follows') && typeof answers.follows === "object") this.follows = answers.follows;
        if (answers.hasOwnProperty('farewells') && typeof answers.farewells === "object") this.farewells = answers.farewells;
    }
    constructor() {
        makeObservable(this);
    }
}
