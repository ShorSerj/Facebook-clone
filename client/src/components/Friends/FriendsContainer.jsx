import React from 'react'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  getUsers
} from '../../redux/friends-reducer'
import Friends from './Friends'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class FriendsAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  
  onCurrentPage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
          follow={this.props.follow}
          users={this.props.users}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
  }
}

const FriendsContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers
})(FriendsAPIComponent)

export default FriendsContainer
