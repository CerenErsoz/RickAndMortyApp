import { combineReducers, createStore } from "redux";
import UserReducer from "../reducer/UserReducer";

const initialState = {
    userInfo: false,
    userName: "Guest"
}

const rootReducer = combineReducers({
    userData: UserReducer
})

export const store = createStore(rootReducer);