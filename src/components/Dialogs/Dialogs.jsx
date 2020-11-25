import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogElements = state.dialogs.map(e => <DialogItem name={e.name} id={e.id} key={e.id}/>)

    let messagesElements = state.messages.map(el => <Message message={el.message} key={el.id}/>)

    let addNewMessage = (values) =>{
        props.SendMessage(values.newMessageBody);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div className={s.textArea}>
                    <AddMessageFormRedux onSubmit={addNewMessage}

                    />
                </div>

            </div>
        </div>
    )
}



const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder="Enter your message"
                    name="newMessageBody"
                    component={TextArea}
                    validate={[required, maxLength50]}

                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)





export default Dialogs;
