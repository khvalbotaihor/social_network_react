import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>

    )
}


const Dialogs = (props) => {

    // ето мир данних, ето BLL(DATA)
    // также у нас есть UI
    let dialogsData = [
        {id: 1,name: 'Dimich'},
        {id: 2,name: 'Andrey'},
        {id: 3,name: 'Sveta'},
        {id: 4,name: 'Sasha'},
        {id: 5,name: 'Victor'},
        {id: 6,name: 'Valera'},
        ]
let dialog = dialogsData.map(e => <DialogItem name={e.name} id={e.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>


            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra?"/>
                <Message message="Yo!!!"/>
            </div>
        </div>
    )
}

export default Dialogs;