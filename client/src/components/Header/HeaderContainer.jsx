import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { getUser } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUser()
    // usersAPI.getUser().then((response) => {
    //   if (response.resultCode === 0) {
    //     let { id, login, email } = response.data
    //     this.props.setAuthUserData(id, email, login)
    //   }
    // })
  }
  
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect(mapStateToProps, { getUser })(HeaderContainer)
