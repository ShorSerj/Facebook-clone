import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import homeReducer from "./home-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

let reduces = combineReducers({
    messengerPages: messengerReducer,
    homePages: homeReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer
})

let store = createStore(reduces)

window.store = store

export default store