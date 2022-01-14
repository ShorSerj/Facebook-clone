import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import homeReducer from "./home-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reduces = combineReducers({
    messengerPages: messengerReducer,
    homePages: homeReducer,
    friendsPage: friendsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// let store = createStore(reduces, applyMiddleware(thunkMiddlware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduces, composeEnhancers(applyMiddleware(thunkMiddlware)
  ));

window.__store__ = store

export default store