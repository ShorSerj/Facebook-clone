import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import homeReducer from "./home-reducer";

let reduces = combineReducers({
    messengerPages: messengerReducer,
    homePages: homeReducer
})

let store = createStore(reduces)

export default store