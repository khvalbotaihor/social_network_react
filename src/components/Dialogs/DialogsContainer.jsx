import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (

        <StoreContext.Consumer>{(store) => {

            let state = store.getState().dialogsPage;

            const SendMessage = () => {
                store.dispatch(sendMessageCreator())
            }

            let updateNewMessageBody = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return (
                <Dialogs
                    SendMessage={SendMessage}
                    updateNewMessageBody={updateNewMessageBody}
                    dialogsPage={state}/>

            )
        }}</StoreContext.Consumer>


    )
}

export default DialogsContainer;