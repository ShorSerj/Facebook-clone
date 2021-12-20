import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import homeReducer from "./home-reducer";
import friendsReducer from "./friends-reducer";

let reduces = combineReducers({
    messengerPages: messengerReducer,
    homePages: homeReducer,
    friendsPage: friendsReducer
})

let store = createStore(reduces)

export default store