import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducer);

export default store;