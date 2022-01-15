import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/validators/objects-helper"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false
}

const friendsReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId, "id", {followed:true})
            }
        case UNFOLLOW: 
        return {
            ...state,
            users: updateObjectInArray(state.users,action.userId, "id", {followed:false})
        }
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: return state
}

}
export const followSucces = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage})
export const setTotalUsersCount = (currentPage) => ({type: SET_TOTAL_USERS_COUNT, count: currentPage})
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching})

export const getUsers = (currentPage=1, pageSize=4) => async (dispatch) => {
        dispatch(toogleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(response.data.users))
            dispatch(setTotalUsersCount(response.data.totalCount))
}
    

export const follow = (userId) => async (dispatch) => {
        dispatch(toogleIsFetching(true))
        await usersAPI.followUser(userId)
            dispatch(toogleIsFetching(false))
            dispatch(followSucces(userId))
}
// export const unfollow = (userId) => {
//     return (dispatch) => {
//         dispatch(toogleIsFetching(true))
//         usersAPI.followUser(userId)
//           .then((response) => {
//             dispatch(toogleIsFetching(false))
//             dispatch(followSucces(userId))
//           })
//     } 
// }
//TODO need add thunk unfollow, lesson 90

export default friendsReducer