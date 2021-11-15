import s from './Store.module.css'

const Store = (props) => {
  return (
    <div className={s.friends__storie}>
      <div className={s.author__wrapper}>
        <figure className={s.author__avatar}>
          <img className={s.avatar__user} src={props.img} alt={props.alt} />
          <figcaption className={s.user__name}>{props.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}
export default Store
