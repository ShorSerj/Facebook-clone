import React from 'react'
import { Route, Routes } from "react-router-dom";
import Paginator from '../common/Paginator/Paginator';
import Friend from './Friend/Friend';
import s from './Friends.module.css'

const Friends = ({totalUsersCount, pageSize, currentPage, onCurrentPage, users, follow}) => {
  return (
    <main>
      <div className={s.navbar}></div>
      <div className={s.users__container}>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onCurrentPage={onCurrentPage}/>
        <h2 className={s.users__title}>Вы можете их знать</h2>
        <div className={s.users}>
          {users.map((user) => <Friend users={users} follow={follow} user={user}  key={user.id}/>)}
        </div>
      </div>
    </main>
  )
}

export default Friends
