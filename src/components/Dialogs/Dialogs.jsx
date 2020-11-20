import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogElements = state.dialogs.map(e => <DialogItem name={e.name} id={e.id} key={e.id}/>)

    let messagesElements = state.messages.map(el => <Message message={el.message} key={el.id}/>)

    const onSendMessageClick = () => {
        props.SendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (props.isAuth === false) return  <Redirect to="/login"/>


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
                            value={state.newMessageBody}
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