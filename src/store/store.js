import { combineReducers, createStore } from "redux";

const initialState = {
    isSignedIn: false,
    userName: "Ceren"
}

const rootReducer = combineReducers({
    userData: () =>initialState
})

export const store = createStore(rootReducer)