import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    console.log(props)
    let dialogElements = props.state.dialogs.map((e, index) => <DialogItem name={e.name} id={e.id} key={index}/>)

    let messagesElements = props.state.messages.map((el, index) => <Message message={el.message} key={index}/>)


    let newMessageElement = React.createRef();


    const addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
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
                            value={props.state.newMessageText}
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