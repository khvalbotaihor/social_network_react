import {createStore, combineReducers} from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);

export default store;