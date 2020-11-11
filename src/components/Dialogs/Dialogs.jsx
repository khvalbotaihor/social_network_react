import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map((e, index) => <DialogItem name={e.name} id={e.id} key={index}/>)

    let messagesElements = props.state.messages.map((el, index) => <Message message={el.message} key={index}/>)


    let ref = React.createRef();


    const addMessage = () => {
        let text = ref.current.value;
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div><textarea ref={ref}></textarea></div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;