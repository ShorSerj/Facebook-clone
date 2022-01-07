import Post from './Post/Post'

import s from './News.module.css'

const News = (props) => {
    let newsWiev = props.newsData.map(n => <Post
        img={n.img}
        author={n.name}
        time={n.time}
        message={n.message}
        mess_image_1={n.mess_image_1}
        mess_image_2={n.mess_image_2}
        mess_image_3={n.mess_image_3}
    />)
    return (
        <div className={s.news__container}>
            <div className={s.status__bar}>
                <span>What’s on you mind, Paul?</span>
                <div className={s.arrow}>
                    <div></div>
                </div>
            </div>
            <section>
                {newsWiev}
            </section>
        </div>
    )
}

export default News
//TODO FIX vie without images