import s from './Social.module.css'
import Store from './Store/Store'

const Social = () => {
  return (
    <section className={s.social__wrapper}>
      <header className={s.social__title}>
        <h2>Stories</h2>
      </header>
      <article className={s.stories}>
        <Store
          img="https://static.tildacdn.com/tild3662-3765-4431-b934-393761356233/71317324_17535198697.png"
          alt="Elephant at sunset"
          name="Alice Kramer"
        />
        <Store
          img="https://elikov.ru/upload/image/lessons/polar_panorama/polar_panorama_2.jpg"
          alt="Elephant at sunset"
          name="Bradyn Kramer"
        />
        <Store
          img="https://zayanaflorist.files.wordpress.com/2019/06/kim_face_circle.jpeg"
          alt="Elephant at sunset"
          name="Pierre Cox"
        />
      </article>
    </section>
  )
}
export default Social
