import React from 'react'
import { Route, Routes } from "react-router-dom";
import s from './Friends.module.css'

const Friends = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <main>
      <div className={s.navbar}></div>
      <div className={s.users__container}>
        <div className={s.pages}>
          {pages.map((p) => {
            return (
              <span 
                className={props.currentPage === p && s.selectedPage}
                onClick={(e) => {
                  props.onCurrentPage(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
        <h2 className={s.users__title}>Вы можете их знать</h2>
        <div className={s.users}>
          {props.users.map((u) => (
            <div className={s.user} key={u.id}>
              <div className={s.user__avatar}>
                <img src={u.photoUrl} alt="" />
              </div>
              <div className={s.text__wrapper}>
                <span className={s.text}>{u.fullName}</span>
                <div className={s.buttons}>
                  <button
                    className={s.button_add}
                    onClick={() => {
                      props.follow(u._id)
                    }}
                  >
                    Добавить
                  </button>
                  <button
                    className={s.button_del}
                    onClick={() => {
                      console.log(props.users)
                      alert(props.isAuth)
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Friends
