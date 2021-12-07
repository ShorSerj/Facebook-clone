import React from "react";

import {AddMessageActionCreator, UpdateNewMessageActionCreator} from "../../../redux/messenger-reducer";
import Chat from "./Chat";

const ChatContainer = (props) => {

    let state = props.store.getState().messengerPages

    let submitMessage = () => {
        props.store.dispatch(AddMessageActionCreator())
    }
    let onMessageChange = (text) => {
        let action = UpdateNewMessageActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Chat AddMessageActionCreator={onMessageChange} submitMessage={submitMessage} img={state.chatData.img} name={state.chatData.name} status={state.chatData.status} id={state.chatData.id} messages={state.messages}/>
    )
}
export default ChatContainer;
