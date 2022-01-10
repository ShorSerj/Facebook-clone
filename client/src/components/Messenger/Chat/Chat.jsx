import React from "react";
import {Field, reduxForm} from 'redux-form'
import s from './Chat.module.css'
import MessageInterlocutor from "./MessageInterlocutor/MessageInterlocutor";
import MessageUser from "./MessageUser/MessageUser";
import Interlocutor from "./Interlocutor/Interlocutor";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const Chat = (props) => {
    let addNewMessage = (values) => {
        props.submitMessage(values.newMessageBody)
    }

    let messageInterlocutorView = props.messages.messageInterlocutorData.map(m => <MessageInterlocutor text={m.text}
                                                                                                        time={m.time} key={m.id}/>)
    let messageUserView = props.messages.messageUserData.map(m => <MessageUser text={m.text} time={m.time} key={m.id}/>)

    return (
        <div className={s.chat}>
            <header className={s.chat__title}>
                <Interlocutor img={props.messages.interlocutorData.img} name={props.messages.interlocutorData.name} status={props.messages.interlocutorData.status}/>
            </header>
            <div className={s.messages}>
                {messageInterlocutorView}
                {messageUserView}
            </div>
            <footer className={s.chat__footer}>
                <LoginReduxForm onSubmit={addNewMessage}/>  
            </footer>
        </div>
    )
}

const maxLength = maxLengthCreator(10)

const AddMessageForm = (props) => {
    return (
        <form action="" className={s.inputs__container} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" validate={[required, maxLength]} className={s.input__typing}/>
            </div>
            <div className="">
                <button>Send</button>
            </div>
        </form>  
    )
}
const LoginReduxForm = reduxForm({form:'dailogAddMessageForm'})(AddMessageForm)

export default Chat;

//TODO Complete input text, fix size blocks

