import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk";


let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    usersPage: usersReducer,
    sidebarReducer: sidebarReducer,
    auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;