import { combineReducers, createStore } from "redux";
import UserReducer from "../reducer/UserReducer";
import SearchReducer from "../reducer/SearchReducer";

const rootReducer = combineReducers({
    userData: UserReducer,
    searchData: SearchReducer,
})

export const store = createStore(rootReducer);