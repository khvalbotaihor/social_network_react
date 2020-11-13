import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/state";


const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map((e, index) => <DialogItem name={e.name} id={e.id} key={index}/>)

    let messagesElements = props.dialogsPage.messages.map((el, index) => <Message message={el.message} key={index}/>)


    let newMessageElement = React.createRef();


    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(text))
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
                            ref={newMessageElement}
                            value={props.dialogsPage.newMessageText}
                            onChange={onMessageChange}
                            ></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;