import s from './MessageUser.module.css'

const MessageUser = (props) => {
    return (
        <div className={s.message_user}>
            <div className={s.user__text}>
                {props.text}
            </div>
            <span className={s.user__time}>{props.time}</span>
        </div>
    )
}
export default MessageUser;
