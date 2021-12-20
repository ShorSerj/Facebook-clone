import s from './Social.module.css'
import Store from './Store/Store'

const Social = (props) => {
    let storeWiev = props.storeData.map(s => <Store img={s.img} name={s.name} alt={s.alt} id={s.id}/>)
  return (
    <section className={s.social__wrapper}>
      <header className={s.social__title}>
        <h2>Stories</h2>
      </header>
      <article className={s.stories}>
          {storeWiev}
      </article>
    </section>
  )
}
export default Social
