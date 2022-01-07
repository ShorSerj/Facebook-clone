import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthUserData } from '../../redux/auth-reducer'
import { usersAPI } from '../../api/api'

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getUser().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data
        this.props.setAuthUserData(id, email, login)
      }
    })
  }
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
