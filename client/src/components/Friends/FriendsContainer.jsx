import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  getUsers
} from '../../redux/friends-reducer'
import Friends from './Friends'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class FriendsAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  
  onCurrentPage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  addToFriends = (userId) => {
    this.props.follow(userId)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onCurrentPage={this.onCurrentPage}
          follow={this.addToFriends}
          users={this.props.users}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    follow: state.friendsPage.users.follow,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
  }
}
export default compose(
  connect(mapStateToProps, {follow, getUsers}),
  // withAuthRedirect
)(FriendsAPIComponent)

