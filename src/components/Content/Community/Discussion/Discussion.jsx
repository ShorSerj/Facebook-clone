import Avatar from './Avatar/Avatar'
import ButtonCall from './ButtonCall/ButtonCall'
import ButtonVideo from './ButtonVideo/ButtonVideo'

import s from './Discussion.module.css'

const Discussion = () => {
  return (
    <div className={s.discussion__container}>
      <div className={s.discussion}>
        <Avatar img="https://carline25.ru/assets/images/background/no_avatar.png" />
        <h3 className={s.discussion__title}>Jessica’s Wedding Plan</h3>
        <span className={s.discussion__status}>Active Now</span>
        <div className={s.discussion__buttons}>
          <ButtonCall />
          <ButtonVideo />
        </div>
      </div>
    </div>
  )
}
export default Discussion
