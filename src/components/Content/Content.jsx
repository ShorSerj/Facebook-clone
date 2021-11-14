import Community from './Community/Community';
import News from './News/News';
import Social from './Social/Social';

import s from './Content.module.css'

const Content = () => {
    return (
        <div className={s.content_wrapper}>
            <Community/>
            <News/>
            <Social/>
        </div>
    )
}
export default Content;