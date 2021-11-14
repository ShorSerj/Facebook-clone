import s from './Social.module.css'

const Social = ()=>{
    return (
        <section className={s.social__wrapper}>
            <header className={s.social__title}>
                <h2>Stories</h2>
            </header>
            <article className={s.stories}>
                <div className={s.friends__storie}>
                    <div className={s.author__wrapper}>
                        <figure className={s.author__avatar}>
                            <img className={s.avatar__user} src="https://static.tildacdn.com/tild3662-3765-4431-b934-393761356233/71317324_17535198697.png"
                            alt="Elephant at sunset"/>
                            <figcaption className={s.user__name}>Alice Kramer</figcaption>
                        </figure>
                    </div>
                </div>
                <div className={s.friends__storie}>
                    <div className={s.author__wrapper}>
                        <figure className={s.author__avatar}>
                            <img className={s.avatar__user} src="https://static.tildacdn.com/tild3662-3765-4431-b934-393761356233/71317324_17535198697.png"
                            alt="Elephant at sunset"/>
                            <figcaption className={s.user__name}>Alice Kramer</figcaption>
                        </figure>
                    </div>
                </div>
                <div className={s.friends__storie}>
                    <div className={s.author__wrapper}>
                        <figure className={s.author__avatar}>
                            <img className={s.avatar__user} src="https://static.tildacdn.com/tild3662-3765-4431-b934-393761356233/71317324_17535198697.png"
                            alt="Elephant at sunset"/>
                            <figcaption className={s.user__name}>Alice Kramer</figcaption>
                        </figure>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Social
