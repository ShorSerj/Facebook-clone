import s from './Message_interlocutor.module.css'

const Message_interlocutor = (props) => {
    return (
        <div className={s.message_interlocutor}>
            <div className={s.interlocutor__text}>
                {props.text}
            </div>
            <span className={s.interlocutor__time}>{props.time}</span>
        </div>
    )
}
export default Message_interlocutor;
