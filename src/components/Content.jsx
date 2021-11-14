import Community from './Community';
import s from './Content.module.css'
import News from './News';
import Social from './Social';

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