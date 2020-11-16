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
window.store = store;

export default store;

//інденмпотентний => хоч 100 раз визвати функціо, результат має бути один і той самий - no side effects
// детерминировасть
// якщо кожного разу вхідні дані різні, то кожного разу, має бути різний результат
// чистая функция, іммютабельна - неизменяєма
