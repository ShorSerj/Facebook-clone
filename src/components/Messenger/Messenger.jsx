import s from './Messenger.module.css'
import Contact from "./Contact/Contact";
import Chat from "./Chat/Chat";

const Messenger = () => {
    return (
        <div className={s.messenger__wrapper}>
            <div className={s.chat_container}>
                <div className={s.chatbar}>
                    <div className={s.serach}>
                        <input type="text" name='search' placeholder='search'/>
                    </div>
                    <div className={s.groups_wrapper}>
                        <h2 className={s.groups_title}>Groups</h2>
                        <Contact
                            img='https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200'
                            name='Raghav' message='Dinner?'/>
                        <Contact
                            img='https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200'
                            name='Raghav' message='Dinner?'/>
                        <Contact
                            img='https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200'
                            name='Raghav' message='Dinner?'/>
                    </div>
                    <div className={s.contacts_wrapper}>
                        <h2 className={s.groups_title}>Recent</h2>
                        <Contact
                            img='https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=627&amp;w=1200'
                            name='Raghav' message='Dinner?'/>
                        <Contact
                            img='https://sun9-30.userapi.com/impf/c630316/v630316965/38d02/rx6K5RkMMlw.jpg?size=800x531&quality=96&sign=9dafb86e056d5fc16fb44665b02665cb&c_uniq_tag=EmOifIa3jwHmaw82ndpJ1KlNm6i445VZwOgtikhuzUA&type=album'
                            name='Swathi' message='Sure!'/>
                        <Contact
                            img='https://cdn.trangcongnghe.com/uploads/posts/2017-11/iphone-x-thu-t224i-x243a-ph244ng-voi-canon-5d-mark-iii-chi-thieu-ch250t-l224-ho224n-hao_8.jpg'
                            name='Kiran' message='Hi.....'/>
                        <Contact img='https://img.novosti-n.org/upload/ukraine/729859.jpg' name='Tejeshwini C'
                                 message='I will call him today.'/>
                    </div>
                </div>
                <Chat
                    img='https://sun9-30.userapi.com/impf/c630316/v630316965/38d02/rx6K5RkMMlw.jpg?size=800x531&quality=96&sign=9dafb86e056d5fc16fb44665b02665cb&c_uniq_tag=EmOifIa3jwHmaw82ndpJ1KlNm6i445VZwOgtikhuzUA&type=album'
                    name='Swathi' status='online'/>
            </div>
        </div>
    )
}
export default Messenger;