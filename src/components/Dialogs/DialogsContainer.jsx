import React from 'react';
import {  sendMessageCreator,  updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const SendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            SendMessage={SendMessage}
            updateNewMessageBody={updateNewMessageBody}
            dialogsPage={state} />
    )
}

export default DialogsContainer;