import {createContext, useContext} from "react";
import {AlgorithmStore} from "./questions/algorithm.store";
import {ThemeColorStore} from "./theme-color.store";
import {QuestionsStore} from "./questions.store";
import {FrontendStore} from "./questions/frontend.store";
import {OtakuQuestionsStore} from "./otaku";
export const rootStore = {
    algorithmQuestionsStore: new AlgorithmStore(),
    basicQuestionsStore: new QuestionsStore({}),
    frontendQuestionStore: new FrontendStore(),
    otakuQuestionStore: new OtakuQuestionsStore(),
    themeColorStore: new ThemeColorStore(),
}
export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
