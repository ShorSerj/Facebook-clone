import React from 'react'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import s from './Header.module.css'

const Header = (props) => {
  return (
    <header>
      <div className={s.cover}>
        <img
          src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.18172-8/19488675_1329432217177465_1956963647259281408_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=XvmOAwmrq7MAX-b_HX8&_nc_ht=scontent-waw1-1.xx&oh=00_AT8BzoxK9yVxzZve-u26UB7I9PSxrmIEhaZWHAvY89AwNg&oe=61E8036F"
          alt=""
        />
      </div>
      <div className={s.person__wrapper}>
        <div className={s.person__avatar}>
          <img
            src="https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/238790/k7F2qYYrsSimLK669hKFcg.jpg"
            alt="person__avatar"
          />
        </div>
        <div className={s.inform__wrapper}>
          <h1 className={s.person__name}>{props.fullName}</h1>
          <ul className={s.friends__wrapper}>
            <li className={s.friends__counter}>
              Друзья: <span>4.2 тыс.</span>
            </li>
            <li className={s.friends__mutual}>
              Общие:: <span>1</span>
            </li>
          </ul>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={s.friends__mutual__images}></div>
        <div className={s.interactions}>
          <div className={s.addFriend}>
            <img
              class="hu5pjgll lzf7d6o1"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/c9BbXR9AzI1.png"
              alt=""
              height="16"
              width="16"
            />
            <span>Друзья</span>
          </div>
          <div className={s.addMessage}>
            <img
              class="hu5pjgll eb18blue"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/YIxFfN5ecJG.png"
              alt=""
              height="16"
              width="16"
            />
            <span>Сообщение</span>
          </div>
        </div>
      </div>
      <div className={s.profileTabs__wrapper}>
        <ul className={s.profileTabs}>
          <li>Публикации</li>
          <li>Информация</li>
          <li>Друзья</li>
          <li>Фото</li>
          <li>Видео</li>
          <li>Посещения</li>
          <li>Еще</li>
        </ul>
        <div className={s.profileTabs__more}>•••</div>
      </div>
    </header>
  )
}
export default Header
