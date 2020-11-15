import React from 'react';
import {  sendMessageCreator,  updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs

            />
    )
}

export default DialogsContainer;