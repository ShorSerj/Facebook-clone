import Community from './Community/Community';
import News from './News/News';
import Social from './Social/Social';

import s from './Home.module.css'

const Home = () => {
    return (
        <div className={s.content_wrapper}>
            <Community/>
            <News/>
            <Social/>
        </div>
    )
}
export default Home;