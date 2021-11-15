import Post from './Post/Post'

import s from './News.module.css'

const News = () => {
  return (
    <div className={s.news__container}>
      <div className={s.status__bar}>
        <span>What’s on you mind, Paul?</span>
        <div className={s.arrow}>
          <div></div>
        </div>
      </div>
      <section>
        <Post
          img="https://fotosuvenir46.ru/components/com_jshopping/files/img_products/kovrik_krugliy_4.jpg"
          name="Thomas Ben"
          time="45 mins ago"
          message="Being a father is sometimes my hardest but always my most rewarding
            job. Happy Father’s Day to all dads out there."
          mess_image_1="https://avatars.mds.yandex.net/i?id=e5b107de0dc47c5602083a00e1fa39de-5232281-images-thumbs&n=13"
          mess_image_2="https://mykaleidoscope.ru/uploads/posts/2021-09/1632845699_32-mykaleidoscope-ru-p-pirozhnoe-blazhenstvo-krasivo-foto-33.jpg"
          mess_image_3="https://mykaleidoscope.ru/uploads/posts/2020-01/1579911305_4-p-pirozhnie-s-vishenkoi-6.png"
        />
        <Post
          img="https://colla-gen.ru/wp-content/uploads/2020/07/8be83f79f3e383be815396d4b97b8d62.png"
          author="Miranda Shaffer"
          time="June 21, 12:45 pm"
          message="Having fun while cooking and eating variety of foods with @Sarah"
          mess_image_1="https://avatars.mds.yandex.net/i?id=e5b107de0dc47c5602083a00e1fa39de-5232281-images-thumbs&n=13"
          mess_image_2="https://mykaleidoscope.ru/uploads/posts/2021-09/1632845699_32-mykaleidoscope-ru-p-pirozhnoe-blazhenstvo-krasivo-foto-33.jpg"
          mess_image_3="https://mykaleidoscope.ru/uploads/posts/2020-01/1579911305_4-p-pirozhnie-s-vishenkoi-6.png"
        />
      </section>
    </div>
  )
}

export default News
