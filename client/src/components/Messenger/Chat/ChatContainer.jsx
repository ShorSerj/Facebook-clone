import {AddMessageActionCreator} from "../../../redux/messenger-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.messengerPages.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        submitMessage: (newMessageBody) => {
            dispatch(AddMessageActionCreator(newMessageBody))
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps) (Chat);

export default ChatContainer;
