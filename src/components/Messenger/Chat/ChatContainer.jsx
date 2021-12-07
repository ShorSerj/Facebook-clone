import React from "react";

import {AddMessageActionCreator, UpdateNewMessageActionCreator} from "../../../redux/messenger-reducer";
import Chat from "./Chat";
import StoreContext from "../../../StoreContext";
import store from "../../../redux/redux-store";

const ChatContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messengerPages

                let submitMessage = () => {
                    store.dispatch(AddMessageActionCreator())
                }
                let onMessageChange = (text) => {
                    let action = UpdateNewMessageActionCreator(text)
                    store.dispatch(action)
                }
                debugger;
                return (
                    <Chat AddMessageActionCreator={onMessageChange} submitMessage={submitMessage}
                          img={state.chatData.img}
                          name={state.chatData.name} status={state.chatData.status} id={state.chatData.id}
                          messages={state.messages}/>
                )
            }}
        </StoreContext.Consumer>

    )
}
export default ChatContainer;
