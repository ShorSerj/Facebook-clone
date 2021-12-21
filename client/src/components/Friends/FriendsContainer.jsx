import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/friends-reducer'
import Friends from './Friends'
class FriendsAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `http://localhost:3003/users/?page=${this.props.currentPage}&limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.users)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  onCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `http://localhost:3003/users/?page=${pageNumber}&limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.users)
      })
  }

  render() {
    return (
      <Friends
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onCurrentPage={this.onCurrentPage}
        follow={this.props.follow}
        users={this.props.users}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (userId) => {
      dispatch(setUsersAC(userId))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
  }
}
const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsAPIComponent)

export default FriendsContainer
