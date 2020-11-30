import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}})


export const getAuthUserData = () =>{
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

export const login = (email, password, rememberMe) =>{
    return (dispatch) => {
        debugger;
        authAPI.login(email, password, rememberMe)
            .then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())



                }
            });
    }
}

export const logout = () =>{
    return (dispatch) => {
        authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))



                }
            });
    }
}

export default authReducer;