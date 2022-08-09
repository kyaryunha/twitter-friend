import {createContext, useContext} from "react";
import {AlgorithmQuestionsStore} from "./algorithm-questions.store";

export const rootStore = {
    algorithmQuestionsStore: new AlgorithmQuestionsStore(),
}
export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
