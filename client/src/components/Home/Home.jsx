import Community from './Community/Community'
import NewsContainer from './News/NewsContainer'
import SocialContainer from './Social/SocialContainer'
import Navbar from '../Navbar/Navbar'

import s from './Home.module.css'

const Home = (props) => {
  return (
    <>
      <Navbar />
      <main className={s.content_wrapper}>
        <Community />
        <NewsContainer />
        <SocialContainer />
      </main>
    </>
  )
}
export default Home
