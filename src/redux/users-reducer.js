const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Dmitry",
            status: "I am  a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Sasha",
            status: "I am  a boss too",
            location: {city: "Moskow", country: "Russia"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Andrew",
            status: "I am  a boss too",
            location: {city: "Kiev", country: "Ukraine"}
        },

    ],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]}
        default:
            return state;
    }
}


export const followAC = (usedId) => ({type: FOLLOW, usedId})
export const unfollowAC = (usedId) => ({type: UNFOLLOW, usedId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;