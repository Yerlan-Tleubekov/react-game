import { createStore } from "redux";
import appReducer from "./appReducers";

export const store = createStore(appReducer);
