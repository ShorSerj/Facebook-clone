import Avatar from './Avatar/Avatar'
import ButtonCall from './ButtonCall/ButtonCall'
import ButtonVideo from './ButtonVideo/ButtonVideo'

import s from './Discussion.module.css'

const Discussion = () => {
  let discussionData = [
    { id:1, photo:"https://carline25.ru/assets/images/background/no_avatar.png", name:'Jessica’s Wedding Plan', status:'Active Now'}
  ]

  return (
    <div className={s.discussion__container}>
      <div className={s.discussion}>
        <Avatar img={discussionData[0].photo} />
        <h3 className={s.discussion__title}>{discussionData[0].name}</h3>
        <span className={s.discussion__status}>{discussionData[0].status}</span>
        <div className={s.discussion__buttons}>
          <ButtonCall />
          <ButtonVideo />
        </div>
      </div>
    </div>
  )
}
export default Discussion
