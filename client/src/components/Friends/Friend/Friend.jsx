import React from 'react'
import style from './Friend.module.css'

const Friend = ({users, follow, user}) => {
  return (
    <div className={style.user}>
      <div className={style.user__avatar}>
        <img src={user.photoUrl} alt="" />
      </div>
      <div className={style.text__wrapper}>
        <span className={style.text}>{user.fullName}</span>
        <div className={style.buttons}>
          <button
            className={style.button_add}
            onClick={() => {
              follow(user._id)
            }}
          >
            Добавить
          </button>
          <button
            className={style.button_del}
            onClick={() => {
              console.log(users)
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Friend
