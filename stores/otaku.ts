import {action, makeObservable, observable} from "mobx";
import {QuestionsStore} from "./questions.store";
import {couplingTextArr, otakuContentsTextArr} from "../utils/questions.text";


export type OtakuQuestionsStoreTypes = {
    store: OtakuQuestionsStore,
}

export class OtakuQuestionsStore extends QuestionsStore {
    @observable genreName: string = "";
    @observable genreLogo: File|null = null;
    @observable couplings: boolean[] = Array(couplingTextArr.length).fill(false);
    @observable characterImages: (File|null)[] = Array(3).fill(null);

    @action
    public updateGenreName = (genreName:string) => {
        this.genreName = genreName;
    }

    @action
    public updateGenreLogo = (genreLogo:File|null) => {
        if (genreLogo === undefined) genreLogo = null;
        this.genreLogo = genreLogo;
    }

    @action
    public updateCouplings = (idx:number, value:boolean) => {
        this.couplings[idx] = value;
    }

    @action
    public updateCharacterImages = (idx: number, characterImage:File|null) => {
        if (characterImage === undefined) characterImage = null;
        if (idx === -1) {
            for(let i=0;i<3;i++) this.characterImages[i] = characterImage;
        }
        this.characterImages[idx] = characterImage;
    }

    constructor() {
        super({
            contentsLength: otakuContentsTextArr.length,
        });
        makeObservable(this);
    }
}
