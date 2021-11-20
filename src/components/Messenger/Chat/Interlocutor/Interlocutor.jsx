import s from './Interlocutor.module.css'


const Interlocutor = (props) => {
    return (
        <div className={s.interlocutor__wrapper}>
            <div className={s.interlocutor}>
                <img className={s.interlocutor__avatar}
                     src={props.img}
                     alt=""/>
                <div className={s.interlocutor_text}>
                    <h3 className={s.interlocutor__name}>{props.name}</h3>
                    <span className={s.interlocutor__status}>{props.status}</span>
                </div>
            </div>
            <div className={s.connect}>
                <div className="">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0405 13.6386L15.2126 13.3158C14.88 13.2767 14.543 13.3135 14.2267 13.4234C13.9105 13.5334 13.6233 13.7135 13.3867 13.9504L11.3381 15.999C8.17746 14.3915 5.60849 11.8225 4.00105 8.66193L6.06076 6.60221C6.5395 6.12347 6.77331 5.45546 6.69537 4.77631L6.3725 1.97065C6.30938 1.42752 6.04873 0.926578 5.64017 0.563191C5.23162 0.199803 4.70369 -0.000648259 4.15692 1.57505e-06H2.23081C0.972712 1.57505e-06 -0.0738452 1.04656 0.0040899 2.30465C0.59417 11.8127 8.19841 19.4058 17.6953 19.9959C18.9534 20.0738 20 19.0273 20 17.7692V15.8431C20.0111 14.7186 19.165 13.7722 18.0405 13.6386Z"
                            fill="#1A66FF"/>
                    </svg>
                </div>
                <div className="">
                    <svg width="29" height="20" viewBox="0 0 29 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.8571 2.85714C22.8571 1.28143 21.5757 0 20 0H2.85714C1.28143 0 0 1.28143 0 2.85714V17.1429C0 18.7186 1.28143 20 2.85714 20H20C21.5757 20 22.8571 18.7186 22.8571 17.1429V12.3814L28.5714 17.1429V2.85714L22.8571 7.61857V2.85714Z"
                            fill="#1A66FF"/>
                    </svg>
                </div>
                <div className="">
                    <svg width="5" height="25" viewBox="0 0 5 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"
                            fill="#1A66FF"/>
                        <path
                            d="M2.5 15C3.88071 15 5 13.8807 5 12.5C5 11.1193 3.88071 10 2.5 10C1.11929 10 0 11.1193 0 12.5C0 13.8807 1.11929 15 2.5 15Z"
                            fill="#1A66FF"/>
                        <path
                            d="M2.5 25C3.88071 25 5 23.8807 5 22.5C5 21.1193 3.88071 20 2.5 20C1.11929 20 0 21.1193 0 22.5C0 23.8807 1.11929 25 2.5 25Z"
                            fill="#1A66FF"/>
                    </svg>
                </div>
            </div>
        </div>

    )
}
export default Interlocutor;

