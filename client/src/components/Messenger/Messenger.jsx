import s from './Messenger.module.css'
import Contact from './Contact/Contact'
import ChatContainer from './Chat/ChatContainer'

const Messenger = (props) => {
  let viewGroupContact = props.messengerPages.groupData.map((c) => (
    <Contact
      img={c.img}
      name={c.name}
      message={c.message}
      id={c.id}
      key={c.id}
    />
  ))
  let viewContact = props.messengerPages.contactData.map((c) => (
    <Contact
      img={c.img}
      name={c.name}
      message={c.message}
      id={c.id}
      key={c.id}
    />
  ))

  return (
    <main className={s.messenger__wrapper}>
      <div className={s.chat_container}>
        <div className={s.chatbar}>
          <div className={s.serach}>
            <input type="text" name="search" placeholder="search" />
          </div>
          <div className={s.groups_wrapper}>
            <h2 className={s.groups_title}>Groups</h2>
            {viewGroupContact}
          </div>
          <div className={s.contacts_wrapper}>
            <h2 className={s.groups_title}>Recent</h2>
            {viewContact}
          </div>
        </div>
        <ChatContainer />
      </div>
    </main>
  )
}
export default Messenger
