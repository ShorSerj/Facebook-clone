import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer.js'

class ProfileConteiner extends React.Component {
  componentDidMount() {
    axios
      .get(`http://localhost:3003/api/1.0/profile/?name=Igor`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})
export default connect(mapStateToProps, { setUserProfile })(ProfileConteiner)
