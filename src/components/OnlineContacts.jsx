import s from './OnlineContacts.module.css'

const OnlineContacts = () => {
    return (
        <div className={s.onlineContacts__container}>
            <div className={s.onlineContacts_title_wrapper}>
                <h2 className={s.onlineContacts__title}>Online Contacts</h2>
                <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <circle cx="2" cy="2" r="2" fill="#788292"/>
                <circle cx="9" cy="2" r="2" fill="#788292"/>
                <circle cx="16" cy="2" r="2" fill="#788292"/>
                </g>
                </svg>
            </div>
            <div className={s.onlineContacts_content_wrapper}>
                <div className={s.onlineContacts__item}>
                    <img src="https://img2.freepng.ru/20180412/ehw/kisspng-photography-circle-drawing-mood-frame-5ad018a69b6676.1880375815235872386365.jpg" alt="friend-img" />
                    <span className={s.friend__name}>Cierra Vega</span>
                </div>
                <div className={s.onlineContacts__item}>
                    <img src="https://sun9-8.userapi.com/impg/zuL_WZY1KKtVSFNNuzGqmpWCIzOeyGNrjYGKSw/uyPQ7mApc7g.jpg?size=604x604&quality=96&sign=6150bbf56917388fa8bf7ac7c66f11e8&type=album" alt="friend-img" />
                    <span className={s.friend__name}>Alden Cantrell</span>
                </div>
                <div className={s.onlineContacts__item}>
                    <img src="https://img2.freepng.ru/20180412/ehw/kisspng-photography-circle-drawing-mood-frame-5ad018a69b6676.1880375815235872386365.jpg" alt="friend-img" />
                    <span className={s.friend__name}>Alden Cantrell</span>
                </div>
                <div className={s.onlineContacts__item}>
                    <img src="https://img2.freepng.ru/20180412/ehw/kisspng-photography-circle-drawing-mood-frame-5ad018a69b6676.1880375815235872386365.jpg" alt="friend-img" />
                    <span className={s.friend__name}>Alden Cantrell</span>
                </div>
                <div className={s.onlineContacts__item}>
                    <img src="https://img2.freepng.ru/20180412/ehw/kisspng-photography-circle-drawing-mood-frame-5ad018a69b6676.1880375815235872386365.jpg" alt="friend-img" />
                    <span className={s.friend__name}>Alden Cantrell</span>
                </div>
                <div className={s.onlineContacts__item}>
                    <img src="https://img2.freepng.ru/20180412/ehw/kisspng-photography-circle-drawing-mood-frame-5ad018a69b6676.1880375815235872386365.jpg" alt="friend-img" />
                    <span className={s.friend__name}>Alden Cantrell</span>
                </div>
            </div>
        </div>
    )
}
export default OnlineContacts;