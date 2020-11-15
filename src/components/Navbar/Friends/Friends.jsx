import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import StoreContext from "../../../StoreContext";

const Friends = () => {
    return (
        <StoreContext.Consumer>{(store)=>{
            let state = store.getState();

            let friend = state.sidebar.friends.map((el, index) => <Friend name={el.name} key={index}/>)

            return (
                <div>
                    <h1>Friends</h1>
                    <div className={s.container}>
                        {friend}
                    </div>
                </div>
            )
        }}</StoreContext.Consumer>










    )
}

export default Friends;
