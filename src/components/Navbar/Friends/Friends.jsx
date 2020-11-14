import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {

       //let friend = props.friends.map((el, index) => <Friend name={el.name} key={index}/>)


    return (
        <div>
            <h1>Friends</h1>
            <div className={s.container}>
{/*
                {friend}
*/}
            </div>
        </div>
    )
}

export default Friends;
