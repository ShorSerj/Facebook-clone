import s from './Avatar.module.css'

const Avatar = (props) => {
  return (
    <div className={s.discussion__logotyps}>
      <img src={props.img} alt="avatar" />
    </div>
  )
}
export default Avatar
