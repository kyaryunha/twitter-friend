import {createContext, useContext} from "react";
import {CreateMenuStore} from "./create-menu.store";

export const rootStore = {
    createMenuStore: new CreateMenuStore(),
}
export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
