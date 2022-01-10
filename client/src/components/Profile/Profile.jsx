import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import Header from './Header/Header'
import News from './News/News'
import s from './Profile.module.css'

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <main className={s.user__profile}>
      <Header fullName={props.profile.fullName} status={props.status} updateStatus={props.updateStatus}/>
      <div className={s.content_wrapper}>
        <div className>
          <section className={s.short__inform}>
            <h3>Краткая информация</h3>
          </section>
          <section className={s.users__foto}>
            <h3>Фото</h3>
          </section>
          <section>
            <h3 className={s.friends}>Друзья</h3>
          </section>
        </div>
        <News />
      </div>
    </main>
  )
}
export default Profile
