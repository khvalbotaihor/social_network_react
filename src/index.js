import React from 'react';
//import store from "./redux/store";
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) =>{
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=> {
    let state = store.getState();
    rerenderEntireTree(state);
});