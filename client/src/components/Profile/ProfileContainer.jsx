import React from 'react'
import Profile from './Profile'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfile } from '../../redux/profile-reducer.js'

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let { userId } = 2
    this.props.getProfile(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { getProfile })(
  ProfileConteiner
)
