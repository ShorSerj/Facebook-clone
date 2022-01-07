
import s from './ButtonVideo.module.css'

const ButtonVideo = () => {
  return (
    <button className={s.discussion__button}>
      <svg
        className={s.video__svg}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9739 5.09135L11.1051 6.16547L10.1385 6.72402V5.58544C10.1385 4.57577 9.3223 3.75943 8.31274 3.75943H3.5227C2.51314 3.75943 1.6969 4.57577 1.6969 5.58544V10.3975C1.6969 11.4072 2.51314 12.2235 3.5227 12.2235H8.33422C9.34378 12.2235 10.16 11.4072 10.16 10.3975V9.23747L11.1266 9.79602L12.9954 10.8701C13.5753 11.1924 14.2842 10.7842 14.2842 10.1183V7.97V5.82175C14.2627 5.15579 13.5539 4.74763 12.9739 5.09135Z"
          fill="#1877F2"
        />
      </svg>
      <span className={s.discussion__button_title}>Video Call</span>
    </button>
  )
}
export default ButtonVideo
