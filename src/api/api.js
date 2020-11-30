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
    followUser (id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    unFollowUser (id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getProfile (userId){
       return  profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile (userId){
        return instance.get(`profile/` + userId)
    },
    getStatus (userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status){
        return instance.put(`profile/status`, {status:status})
    }
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login (email,password, rememberMe=false) {
        return instance.post(`auth/login`,{email:email, password: password,rememberMe:rememberMe})
    },
    logOut () {
        return instance.delete(`auth/login`)
    },
}


