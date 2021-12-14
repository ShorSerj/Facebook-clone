import Friend from './friend/Friend'
import s from './OnlineContacts.module.css'

const OnlineContacts = (props) => {
    let friendsVisibility= props.onlineContactsData.map(f => <Friend avatar={f.avatar} name={f.name} key={f.id}/>)

    return (
        <div className={s.onlineContacts__container}>
            <div className={s.onlineContacts_title_wrapper}>
                <h2 className={s.onlineContacts__title}>Online Contacts</h2>
                <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.4">
                        <circle cx="2" cy="2" r="2" fill="#788292"/>
                        <circle cx="9" cy="2" r="2" fill="#788292"/>
                        <circle cx="16" cy="2" r="2" fill="#788292"/>
                    </g>
                </svg>
            </div>
            <div className={s.onlineContacts_content_wrapper}>
                {friendsVisibility}
            </div>
        </div>
    )
}
export default OnlineContacts
