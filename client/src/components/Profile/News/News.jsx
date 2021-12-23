import React from 'react'
import s from './News.module.css'

const News = (props) => {
  return (
    <div className="">
      <div className={s.add__publication}>
        <div className={s.publication__addText}>
          <img
            src="https://storage.yandexcloud.net/printio/assets/realistic_views/round_mouse_pad/detailed/f8d40c9761e7e901d8f9accdbaa376432148d827.jpg?1547712687"
            alt="avatar"
          />
          <div className={s.publication__text}>Что у вас нового?</div>
        </div>
        <div className={s.publication__addElse}>
          <div className={s.publication__live}>
            <span className={s.live__svg}>
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 i2fa72qc rgmg9uty b73ngqbp"
              >
                <g fill-rule="evenodd" transform="translate(-444 -156)">
                  <g>
                    <path
                      d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                      transform="translate(354 158.5)"
                    ></path>
                    <path
                      d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                      transform="translate(354 158.5)"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <span className={s.live__text}>Прямой эфир</span>
          </div>
          <div className={s.publication__photo}>
            <span className={s.photo__svg}>
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 n90h9ftp rgmg9uty b73ngqbp"
              >
                <g fill-rule="evenodd" transform="translate(-444 -156)">
                  <g>
                    <path
                      d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                      transform="translate(352 156.5)"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z"
                      transform="translate(352 156.5)"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <span className={s.photo__text}>Фото/видео</span>
          </div>
          <div className={s.publication__event}>
            <span className={s.events__svg}>
              <i data-visualcompletion="css-img"></i>
            </span>
            <span className={s.event__text}>Событие из жизни</span>
          </div>
        </div>
      </div>
      <div className={s.publications__container}>
        <div className={s.filters}>
          <h3 className={s.publications__title}>Публикации</h3>
          <div className={s.filter}>
            <div className={s.filter__logo}>
              <i></i>
            </div>
            <span className={s.filter__text}>Фильтры</span>
          </div>
          <div className={s.control}>
            <div className={s.control__logo}>
              <i></i>
            </div>
            <span className={s.control__text}>Управление</span>
          </div>
        </div>
        <div className={s.publications__vie}>
          <div className={s.list}>
            <div className={s.list__svg}>
              <i></i>
            </div>
            <span>Список</span>
          </div>
          <div className={s.grid}>
            <div className={s.grid__svg}>
              <i></i>
            </div>
            <span>Сетка</span>
          </div>
        </div>
      </div>
      <div className={s.news}></div>
    </div>
  )
}
export default News
