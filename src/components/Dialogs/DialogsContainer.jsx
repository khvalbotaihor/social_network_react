import React from 'react';
import {  sendMessageCreator,  updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    const SendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            SendMessage={SendMessage}
            onMessageChange={onMessageChange}
            state={state}
            />
    )
}

export default DialogsContainer;