import { createContext } from "react";
import RootStore from "../stores";

const store = new RootStore();

const loadAllData = async () => {
    await store.auteurStore.loadAllAuteurs();
    await store.interactieStore.loadCurrentTimeStamp();
    store.userStore.getUsers();
};
 
loadAllData();

window.store = store;

export const storeContext = createContext(store);
