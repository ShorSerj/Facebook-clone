import Friend from './friend/Friend'
import s from './OnlineContacts.module.css'

const OnlineContacts = () => {
  return (
    <div className={s.onlineContacts__container}>
      <div className={s.onlineContacts_title_wrapper}>
        <h2 className={s.onlineContacts__title}>Online Contacts</h2>
        <svg
          width="18"
          height="4"
          viewBox="0 0 18 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <circle cx="2" cy="2" r="2" fill="#788292" />
            <circle cx="9" cy="2" r="2" fill="#788292" />
            <circle cx="16" cy="2" r="2" fill="#788292" />
          </g>
        </svg>
      </div>
      <div className={s.onlineContacts_content_wrapper}>
        <Friend
          avatar="https://img2.freepng.ru/20180412/ehw/kisspng-photography-circle-drawing-mood-frame-5ad018a69b6676.1880375815235872386365.jpg"
          name="Cierra Vega"
        />
        <Friend
          avatar="https://avatars.mds.yandex.net/i?id=f3e17a19823f85f3501629fd55748b35-4841525-images-thumbs&n=13"
          name="Alden Cantrell"
        />
        <Friend
          avatar="https://cdn.pixabay.com/photo/2018/07/08/21/35/human-3524862_1280.jpg"
          name="Kierra Gentry"
        />
        <Friend
          avatar="https://cdn.pixabay.com/photo/2017/04/04/17/55/people-2202472_1280.jpg"
          name="Bradyn Kramer"
        />
        <Friend
          avatar="http://www.weareart.ru/public/uploads/news/967/b-IMG_2128edfef1b9.jpg"
          name="Thomas Crane"
        />
      </div>
    </div>
  )
}
export default OnlineContacts
