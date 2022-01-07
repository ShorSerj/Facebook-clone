import {applyMiddleware, combineReducers, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import homeReducer from "./home-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlware from 'redux-thunk'

let reduces = combineReducers({
    messengerPages: messengerReducer,
    homePages: homeReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    auth: authReducer
})

let store = createStore(reduces, applyMiddleware(thunkMiddlware))

window.store = store

export default store