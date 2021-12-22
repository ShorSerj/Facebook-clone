import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toogleIsFetchingAC,
} from '../../redux/friends-reducer'
import Friends from './Friends'
import Preloader from '../common/Preloader/Preloader'

class FriendsAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetchingAC(true)
    axios
      .get(
        `http://localhost:3003/users/?page=${this.props.currentPage}&limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetchingAC(false)
        this.props.setUsers(response.data.users)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }
  onCurrentPage = (pageNumber) => {
    this.props.toogleIsFetchingAC(true)
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `http://localhost:3003/users/?page=${pageNumber}&limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetchingAC(false)
        this.props.setUsers(response.data.users)
      })
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
    toogleIsFetchingAC: (isFetching) => {
      dispatch(toogleIsFetchingAC(isFetching))
    },
  }
}
const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsAPIComponent)

export default FriendsContainer
