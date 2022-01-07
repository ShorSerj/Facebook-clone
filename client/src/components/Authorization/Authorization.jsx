import s from './Authorization.module.css'

const Authorization = () => {
  return (
    <main className={s.wrapper}>
      <div className={s.content__container}>
        <div className={s.greetings}>
          <div className={s.logotype}>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook"
            />
          </div>
          <h2 className={s.relog__title}>
            Facebook помогает вам всегда оставаться на связи и общаться со
            своими знакомыми.
          </h2>
        </div>
        <div className={s.authorization__wrapper}>
          <form action="" className={s.form__wrapper}>
            <div className={s.input__wrapper}>
              <label htmlFor=""></label>
              <input
                className={s.input__login}
                type="text"
                placeholder="Электронный адрес или номер телефона"
              />
            </div>
            <div className={s.input__wrapper}>
              <label htmlFor=""></label>
              <input
                className={s.input__password}
                type="password"
                placeholder="Пароль"
              />
            </div>
            <button className={s.button__logIn}>Вход</button>
            <div className={s.forgot_pass}>
              <a href="#">Забыли пароль?</a>
            </div>
            <div className={s.border__block}></div>
            <button className={s.sign_up}>Создать новый аккаунт</button>
          </form>
          <div className={s.create__celebrity}>
            <a href="#" className={s.create__celebrity_link}>
              Создать Страницу
            </a>
            знаменитости, музыкальной группы или компании.
          </div>
        </div>
      </div>
    </main>
  )
}
export default Authorization
