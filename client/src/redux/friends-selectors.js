import { createSelector } from "reselect"

const getUserSelector = (state) => {
    return state.friendsPage.users
}

export const getUser = createSelector(getUserSelector, (users) => {
    return users.filter(u => true)
})

export const getFollow = (state) => {
    return state.friendsPage.users.follow
}

export const getPageSize = (state) => {
    return state.friendsPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.friendsPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage
}

export const getIsFetching = (state) => {
    return state.friendsPage.isFetching
}
