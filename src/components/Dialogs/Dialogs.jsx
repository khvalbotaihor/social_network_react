import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {  sendMessageCreator,  updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map((e, index) => <DialogItem name={e.name} id={e.id} key={index}/>)

    let messagesElements = props.state.messages.map((el, index) => <Message message={el.message} key={index}/>)

    const onSendMessageClick = () => {
        props.SendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
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
                            value={props.state.newMessageBody}
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