import Community from './Community/Community'
import NewsContainer from './News/NewsContainer'
import SocialContainer from './Social/SocialContainer'

import s from './Home.module.css'

const Home = (props) => {
  return (
    <main className={s.content_wrapper}>
      <Community />
      <NewsContainer />
      <SocialContainer />
    </main>
  )
}
export default Home
