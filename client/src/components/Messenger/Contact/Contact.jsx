import s from './Contact.module.css'
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    return (
        <NavLink to={"/messenger/" + props.id}>
            <div className={s.contact__wrapper}>
                <div className={s.contact}>
                    <img className={s.contact__avatar}
                         src={props.img}
                         alt=""/>
                    <div className={s.contact_text}>
                        <h3 className={s.contact__name}>{props.name}</h3>
                        <span className={s.contact_message}>{props.message}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
export default Contact;
