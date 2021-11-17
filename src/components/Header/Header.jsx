import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <ul className={s.links}>
                <li>
                    <NavLink to='/' className = { navData => navData.isActive ? s.activeLink : s.item } >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/notification' className = { navData => navData.isActive ? s.activeLink : s.item }>Notification</NavLink>
                </li>
                <li>
                    <NavLink to='/watch' className = { navData => navData.isActive ? s.activeLink : s.item }>Watch</NavLink>
                </li>
                <li>
                    <NavLink to='/marketplace' className = { navData => navData.isActive ? s.activeLink : s.item }>Marketplace</NavLink>
                </li>
                <li>
                    <NavLink to='/groups' className = { navData => navData.isActive ? s.activeLink : s.item }>Groups</NavLink>
                </li>
                <li>
                    <NavLink to='/messenger'  className = { navData => navData.isActive ? s.activeLink : s.item }>Messenger</NavLink>
                </li>
                <li>
                    <NavLink to='/live' className = { navData => navData.isActive ? s.activeLink : s.item }>Live</NavLink>
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
                        <circle cx="8" cy="8.02631" r="7.5" stroke="#788292"/>
                        <path d="M14 15L19 19" stroke="#788292"/>
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


//TODO search and avatar need transfer to components