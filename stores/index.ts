import {createContext, useContext} from "react";
import {AlgorithmQuestionsStore} from "./algorithm-questions.store";
import {ThemeColorStore} from "./theme-color.store";
import {QuestionsStore} from "./questions.store";
import {algorithmContentsTextArr} from "../utils/questions.text";

export const rootStore = {
    algorithmQuestionsStore: new AlgorithmQuestionsStore({contentsLength: algorithmContentsTextArr.length}),
    basicQuestionsStore: new QuestionsStore({}),
    themeColorStore: new ThemeColorStore(),
}
export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
