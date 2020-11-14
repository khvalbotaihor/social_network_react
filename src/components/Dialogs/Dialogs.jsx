import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {  sendMessageCreator,  updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    debugger;

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map((e, index) => <DialogItem name={e.name} id={e.id} key={index}/>)

    let messagesElements = state.messages.map((el, index) => <Message message={el.message} key={index}/>)

    let newMessageBody = state.newMessageBody;


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div className={s.textArea}>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;