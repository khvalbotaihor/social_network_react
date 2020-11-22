import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "4d139ff6-a913-4dd1-9885-7cbd4a942daa"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    authMe () {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    getProfile (userId){
        return instance.get(`profile/` + userId)
    },
    followUser (id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    unFollowUser (id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    }
}
export const profileAPI = {
    getProfile (userId){
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
}


