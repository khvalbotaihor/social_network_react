import React from 'react';
import {state, store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
store.subscribe(rerenderEntireTree);