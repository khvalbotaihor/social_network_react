import s from "../Friends.module.css";
import React from 'react';

const Friend = (props) =>{
    return (
        <div className={s.friends}>
            <div className={s.friendStyle}></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friend;