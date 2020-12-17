import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
       "API-KEY": "526efb90-d0dd-4e0f-b76d-1ec8c849b053"
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
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile)

        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }

        })

    },
    saveProfile(profile){
        return instance.put(`profile`, profile)

    }
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login (email,password, rememberMe=false, captcha=null) {
        return instance.post(`auth/login`,{email, password,rememberMe, captcha})
    },
    logOut () {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
}


