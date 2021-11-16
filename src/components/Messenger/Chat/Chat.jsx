import s from './Chat.module.css'

const Chat = (props) => {
    return (
        <div className={s.chat}>
            <header className={s.chat__title}>
                <div className={s.contact}>
                    <img className={s.contact__avatar}
                         src={props.img}
                         alt=""/>
                    <div className={s.contact_text}>
                        <h3 className={s.contact__name}>{props.name}</h3>
                        <span className={s.contact__status}>{props.status}</span>
                    </div>
                </div>
                <div className=""></div>
            </header>
            <div className={s.messages}>
                <div ></div>
            </div>
        </div>
    )
}
export default Chat;