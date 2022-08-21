import {createContext, useContext} from "react";
import {AlgorithmQuestionsStore} from "./algorithm-questions.store";
import {ThemeColorStore} from "./theme-color.store";
import {QuestionsStore} from "./questions.store";
import {FrontendQuestionsStore} from "./frontend-questions.store";
export const rootStore = {
    algorithmQuestionsStore: new AlgorithmQuestionsStore(),
    basicQuestionsStore: new QuestionsStore({}),
    frontendQuestionStore: new FrontendQuestionsStore(),
    themeColorStore: new ThemeColorStore(),
}
export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
