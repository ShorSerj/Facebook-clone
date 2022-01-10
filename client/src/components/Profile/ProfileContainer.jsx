import React from 'react'
import Profile from './Profile'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus} from '../../redux/profile-reducer.js'

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let userId  = 21401
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default connect(mapStateToProps, { getProfile, getStatus, updateStatus })(
  ProfileConteiner
)
