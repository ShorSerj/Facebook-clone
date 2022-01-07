import Comments from './Comments/Comments'
import Like from './Like/Like'
import Share from './Share/Share'

import s from './Post.module.css'

const Post = (props) => {
  return (
    <article className={s.post__container}>
      <div className={s.post}>
        <header className={s.author}>
          <img src={props.img} alt="author" />
          <div className={s.author__inform}>
            <h3 className={s.author__name}>{props.name}</h3>
            <span className={s.time__post}>{props.time}</span>
          </div>
        </header>
        <div className={s.post__content}>
          <p>{props.message}</p>
        </div>
        <div className={s.post__images}>
          <figure className={s.gallery__item}>
            <img
              className={s.gallery__img}
              src={props.mess_image_1}
              alt="some"
            />
          </figure>
          <figure className={s.gallery__item}>
            <img
              className={s.gallery__img}
              src={props.mess_image_2}
              alt="some"
            />
          </figure>
          <figure className={s.gallery__item}>
            <img
              className={s.gallery__img}
              src={props.mess_image_3}
              alt="some"
            />
          </figure>
        </div>
        <footer className={s.post__reviews}>
          <div className={s.reviews__container}>
           <Like value="12" />   {/*//TODO change to Redux*/}
            <Comments value="7" />  {/*//TODO change to Redux*/}
            <Share value="1" />  {/*//TODO change to Redux*/}
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Post
