import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

})

const store = createStore(reducer, applyMiddleware(thunk));
window.store = store;

export default store;

//інденмпотентний => хоч 100 раз визвати функціо, результат має бути один і той самий - no side effects
// детерминировасть
// якщо кожного разу вхідні дані різні, то кожного разу, має бути різний результат
// чистая функция, іммютабельна - неизменяєма
