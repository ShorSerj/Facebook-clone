import ButtonCall from './ButtonCall/ButtonCall'
import ButtonVideo from './ButtonVideo/ButtonVideo'

import s from './Discussion.module.css'

const Discussion = (props) => {
   return (
    <div className={s.discussion__container}>
      <div className={s.discussion}>
        <div className={s.discussion__logotyps}>
          <img src={props.discussionData.img} alt="avatar" />
        </div>
        <h3 className={s.discussion__title}>{props.discussionData.name}</h3>
        <span className={s.discussion__status}>
          {props.discussionData.status}
        </span>
        <div className={s.discussion__buttons}>
          <ButtonCall />
          <ButtonVideo />
        </div>
      </div>
    </div>
  )
}
export default Discussion
