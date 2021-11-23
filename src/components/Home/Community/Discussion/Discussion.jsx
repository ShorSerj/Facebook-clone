import Avatar from './Avatar/Avatar'
import ButtonCall from './ButtonCall/ButtonCall'
import ButtonVideo from './ButtonVideo/ButtonVideo'

import s from './Discussion.module.css'

const Discussion = (props) => {

  return (
    <div className={s.discussion__container}>
      <div className={s.discussion}>
        <Avatar img={props.discussionData[0].photo} />
        <h3 className={s.discussion__title}>{props.discussionData[0].name}</h3>
        <span className={s.discussion__status}>{props.discussionData[0].status}</span>
        <div className={s.discussion__buttons}>
          <ButtonCall />
          <ButtonVideo />
        </div>
      </div>
    </div>
  )
}
export default Discussion
