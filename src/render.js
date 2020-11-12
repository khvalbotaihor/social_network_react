import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessage, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessage={updateNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
