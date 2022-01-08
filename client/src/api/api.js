import * as axios from 'axios'

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a0a159a2-62b9-40c2-90a5-ecc29888975b"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axios.get(
            `http://localhost:3003/api/1.0/users/?page=${currentPage}&limit=${pageSize}`
          )
    },

    getUser(){
        return instance.get(`auth/me`).then(
            response => {
                return response.data
            }
        )
    },

    followUser (userId) {
        return axios.post(`http://localhost:3003/api/1.0/follow/` + userId) 
        .then((response) => {
          return response.data
        })
    },

    getProfile (userId) {
        if (!userId) {
          userId = '2'
        }
        return axios.get(`http://localhost:3003/api/1.0/profile/?userId=` + userId)
          .then((response) => {
              
            return response.data
          })
    }    
}
