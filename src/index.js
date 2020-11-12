import React from 'react';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let sta = store.getState();

let rerenderEntireTree = (sta) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);