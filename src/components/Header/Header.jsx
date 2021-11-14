import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <ul className={s.links}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Notification</a>
        </li>
        <li>
          <a>Watch</a>
        </li>
        <li>
          <a>Marketplace</a>
        </li>
        <li>
          <a>Groups</a>
        </li>
        <li>
          <a>Messenger</a>
        </li>
        <li>
          <a>Live</a>
        </li>
      </ul>
      <div className={s.search}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <circle cx="8" cy="8.02631" r="7.5" stroke="#788292" />
            <path d="M14 15L19 19" stroke="#788292" />
          </g>
        </svg>
      </div>
      <div className={s.avatar}>
        <img
          src="https://storage.yandexcloud.net/printio/assets/realistic_views/round_mouse_pad/detailed/f8d40c9761e7e901d8f9accdbaa376432148d827.jpg?1547712687"
          alt=""
        />
      </div>
    </header>
  )
}
export default Header
