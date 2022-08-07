import {createContext, useContext} from "react";
import {CreateMenuStore} from "./create-menu.store";
import {QuestionsStore} from "./questions.store";

export const rootStore = {
    createMenuStore: new CreateMenuStore(),
    questionsStore: new QuestionsStore(),
}
export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
