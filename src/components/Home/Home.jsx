import Community from './Community/Community';
import News from './News/News';
import Social from './Social/Social';

import s from './Home.module.css'

const Home = (props) => {
    return (
        <div className={s.content_wrapper}>
            <Community communityBlock={props.homePages.communityBlock}/>
            <News newsData={props.homePages.newsData}/>
            <Social storeData={props.homePages.storeData} />
        </div>
    )
}
export default Home;