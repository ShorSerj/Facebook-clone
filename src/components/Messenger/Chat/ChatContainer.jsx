import React from "react";
import {AddMessageActionCreator, UpdateNewMessageActionCreator} from "../../../redux/messenger-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.messengerPages.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddMessageActionCreator: (body) => {
            dispatch(UpdateNewMessageActionCreator(body))
        },
        submitMessage: () => {
            dispatch(AddMessageActionCreator())
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps) (Chat);

export default ChatContainer;
