import s from './Messenger.module.css'

const Messenger = () => {
    return (
        <div className={s.messenger__wrapper}>
            <div className={s.chatbar}>
                <div className={s.serach}>
                    <input type="text" name='search' placeholder='search'/>
                </div>
                <div className={s.groups_wrapper}>
                    <h2>Groups</h2>
                    <div className={s.groups}>
                        <div className={s.groups__item}>
                            <img className={s.avatar_contact}
                                src="https://static.tildacdn.com/tild3431-3836-4938-b737-646634363131/group-of-young-peopl.jpg"
                                alt=""/>
                            <div className={s.contact_name}>
                                <h3>Friends Reunion</h3>
                                <span>Hi Guys, Wassup!</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Messenger;