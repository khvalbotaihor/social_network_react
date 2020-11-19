import * as axios from "axios";

export const getUsers = (currentPage =1,pageSize =10) =>{
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{
        withCredentials: true
    })
        .then(response => {
            return response.data})
}

export const authMe = () =>{
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        withCredentials: true
    })
}

export const getUser = (userId) =>{
    return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}

export const followUser = (id) =>{
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "4d139ff6-a913-4dd1-9885-7cbd4a942daa"

        }
    }).then(response =>{
        return response.data
    })
}
export const unFollowUser = (id) =>{
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "4d139ff6-a913-4dd1-9885-7cbd4a942daa"

        }
    }).then(response =>{
        return response.data
    })
}