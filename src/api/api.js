import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "4d139ff6-a913-4dd1-9885-7cbd4a942daa"
    }

})


export const getUsers = (currentPage =1,pageSize =10) =>{
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data})
}

export const authMe = () =>{
    return  instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => {
        return response.data
    })
}

export const getUser = (userId) =>{
    return  instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response =>{
            return response.data
        })
}

export const followUser = (id) =>{
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response =>{
        return response.data
    })
}
export const unFollowUser = (id) =>{
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response =>{
        return response.data
    })
}