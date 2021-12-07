import React from "react";

import s from './Chat.module.css'
import Message_interlocutor from "./Message_interlocutor/Message_interlocutor";
import Message_user from "./Message_user/Message_user";
import Interlocutor from "./Interlocutor/Interlocutor";

const Chat = (props) => {
    let newMessage = React.createRef();
    let onSubmitMessage = () => {
        props.submitMessage()
    }
    let onMessageChange = () => {
        let text = newMessage.current.value
        props.AddMessageActionCreator(text)
    }

    let messageInterlocutorView = props.messages.messageInterlocutorData.map(m => <Message_interlocutor text={m.text}
                                                                                                        time={m.time} key={m.id}/>)
    let messageUserView = props.messages.messageUserData.map(m => <Message_user text={m.text} time={m.time} key={m.id}/>)

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
                <div className={s.inputs__container}>
                    <div className="">
                        <input onChange={onMessageChange} className={s.input__typing} type="text" ref={newMessage}
                               value={props.messages.newMessageText}/>
                        {/*TODO need add buttoms for increase input block */}
                        {/*<div className="">*/}
                        {/*    <svg width="14" height="13" viewBox="0 0 14 13" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path*/}
                        {/*            d="M0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H6.5C7.16304 0 7.79893 0.263392 8.26777 0.732233C8.73661 1.20107 9 1.83696 9 2.5V3H8V2.5C8 2.10218 7.84196 1.72064 7.56066 1.43934C7.27936 1.15804 6.89782 1 6.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V6.5C1 6.89782 1.15804 7.27936 1.43934 7.56066C1.72064 7.84196 2.10218 8 2.5 8H8.085C8.20295 7.66639 8.43503 7.38522 8.74024 7.20618C9.04545 7.02715 9.40412 6.96177 9.75287 7.0216C10.1016 7.08144 10.418 7.26264 10.6461 7.53317C10.8741 7.8037 10.9992 8.14616 10.9992 8.5C10.9992 8.85384 10.8741 9.1963 10.6461 9.46683C10.418 9.73736 10.1016 9.91856 9.75287 9.9784C9.40412 10.0382 9.04545 9.97285 8.74024 9.79382C8.43503 9.61478 8.20295 9.33361 8.085 9H2.5C1.83696 9 1.20107 8.73661 0.732233 8.26777C0.263392 7.79893 0 7.16304 0 6.5V2.5ZM5 10V10.5C5 11.163 5.26339 11.7989 5.73223 12.2678C6.20107 12.7366 6.83696 13 7.5 13H11.5C12.163 13 12.7989 12.7366 13.2678 12.2678C13.7366 11.7989 14 11.163 14 10.5V6.5C14 5.83696 13.7366 5.20107 13.2678 4.73223C12.7989 4.26339 12.163 4 11.5 4H5.915C5.79705 3.66639 5.56497 3.38522 5.25976 3.20618C4.95455 3.02715 4.59588 2.96177 4.24713 3.0216C3.89839 3.08144 3.58202 3.26264 3.35395 3.53317C3.12588 3.8037 3.00079 4.14616 3.00079 4.5C3.00079 4.85384 3.12588 5.1963 3.35395 5.46683C3.58202 5.73736 3.89839 5.91856 4.24713 5.9784C4.59588 6.03823 4.95455 5.97285 5.25976 5.79382C5.56497 5.61478 5.79705 5.33361 5.915 5H11.5C11.8978 5 12.2794 5.15804 12.5607 5.43934C12.842 5.72064 13 6.10218 13 6.5V10.5C13 10.8978 12.842 11.2794 12.5607 11.5607C12.2794 11.842 11.8978 12 11.5 12H7.5C7.10218 12 6.72064 11.842 6.43934 11.5607C6.15804 11.2794 6 10.8978 6 10.5V10H5Z"*/}
                        {/*            fill="black"/>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}
                    </div>
                    <button className={s.input__audiotext} onClick={onSubmitMessage}>
                        {/*TODO need change svg when in input__typing have some text */}
                        {/*<svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path*/}
                        {/*        d="M12.9688 9.9375V12.2812C12.9688 13.7317 12.3926 15.1227 11.367 16.1482C10.3414 17.1738 8.9504 17.75 7.5 17.75C6.0496 17.75 4.6586 17.1738 3.63301 16.1482C2.60742 15.1227 2.03125 13.7317 2.03125 12.2812V9.9375H0.46875V12.2812C0.469571 14.0102 1.10739 15.6782 2.26033 16.9667C3.41327 18.2551 5.0005 19.0735 6.71875 19.2656V20.875H3.59375V22.4375H11.4062V20.875H8.28125V19.2656C9.9995 19.0735 11.5867 18.2551 12.7397 16.9667C13.8926 15.6782 14.5304 14.0102 14.5312 12.2812V9.9375H12.9688Z"*/}
                        {/*        fill="white"/>*/}
                        {/*    <path*/}
                        {/*        d="M7.5 16.1875C8.536 16.1875 9.52957 15.7759 10.2621 15.0434C10.9947 14.3108 11.4062 13.3173 11.4062 12.2812V4.46875C11.4062 3.43275 10.9947 2.43918 10.2621 1.70661C9.52957 0.97405 8.536 0.5625 7.5 0.5625C6.464 0.5625 5.47043 0.97405 4.73786 1.70661C4.0053 2.43918 3.59375 3.43275 3.59375 4.46875V12.2812C3.59375 13.3173 4.0053 14.3108 4.73786 15.0434C5.47043 15.7759 6.464 16.1875 7.5 16.1875Z"*/}
                        {/*        fill="white"/>*/}
                        {/*</svg>*/}
                        <svg className="crt8y2ji" width="20px" height="20px" viewBox="0 0 24 24">
                            <path
                                d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                                fill="#FFFFFF" fillRule="evenodd" stroke="none"></path>
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    )
}
export default Chat;

//TODO Complete input text, fix size blocks