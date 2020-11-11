import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.mess}>
            <div className={s.messages}>
                <span className={s.commentIcon}></span>
                <span className={s.message}>{props.message}</span>
                <span className={s.commentIcon}></span>
            </div>
        </div>
    )
}

export default Message;