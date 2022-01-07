import s from './MessageInterlocutor.module.css'

const MessageInterlocutor = (props) => {
  return (
    <div className={s.message_interlocutor}>
      <div className={s.interlocutor__text}>{props.text}</div>
      <span className={s.interlocutor__time}>{props.time}</span>
    </div>
  )
}
export default MessageInterlocutor
