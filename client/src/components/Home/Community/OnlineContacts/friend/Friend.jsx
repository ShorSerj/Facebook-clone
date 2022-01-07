import s from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={s.onlineContacts__item}>
      <img
        src={props.avatar}
        alt="friend-img"
      />
      <span className={s.friend__name}>{props.name}</span>
    </div>
  )
}
export default Friend
