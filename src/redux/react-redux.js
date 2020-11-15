import {createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducer = ({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducer);