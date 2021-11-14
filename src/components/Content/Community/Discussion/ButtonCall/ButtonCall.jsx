import s from './ButtonCall.module.css'

const ButtonCall = () => {
  return (
    <button
      className={`${s.discussion__button} ${s.discussion__button_margin_10px}`}
    >
      <svg
        className={s.call__svg}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.39147 0.470488C3.71367 0.620865 3.97143 2.6617 4.20771 3.34914C4.27215 3.54249 4.22919 3.75731 4.07883 3.90769C3.60627 4.35882 3.13371 4.80996 2.66115 5.26109C3.58479 7.04414 4.98099 8.35457 6.74235 9.34277C7.17195 8.91312 7.60155 8.48347 8.00967 8.05382C8.24595 7.81751 8.46075 7.75306 8.80443 7.88196C9.44884 8.13975 11.425 8.35457 11.5539 8.69829V11.3621C11.425 11.4481 10.1577 11.6199 8.67556 11.2977C4.61583 10.4599 1.45827 7.0871 0.62055 3.04839C0.21243 1.09348 0.53463 0.534935 0.62055 0.449005H3.39147V0.470488Z"
          fill="#1877F2"
        />
      </svg>
      <span className={s.discussion__button_title}>Call Group</span>
    </button>
  )
}
export default ButtonCall
