import * as axios from 'axios'
import React from 'react'
import s from './Friends.module.css'

class Friends extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:8000/friends').then((response) => {
      this.props.setUsers(response.data.items)
    })
  }
  render() {
    return (
      <main>
        <div className={s.navbar}></div>
        <div className={s.users__container}>
          <h2 className={s.users__title}>Вы можете их знать</h2>
          <div className={s.users}>
            {this.props.users.map((u) => (
              <div className={s.user} key={u.id}>
                <div className={s.user__avatar}>
                  <img src={u.photoUrl} alt="" />
                </div>
                <div className={s.text__wrapper}>
                  <span className={s.text}>{u.fullNmae}</span>
                  <div className={s.buttons}>
                    <button
                      className={s.button_add}
                      onClick={() => {
                        this.props.follow(u.id)
                      }}
                    >
                      Добавить
                    </button>
                    <button
                      className={s.button_del}
                      onClick={() => {
                        console.log(this.props.users)
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }
}
export default Friends
