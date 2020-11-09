import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

export const Profile = () =>{
    return (
        <div className={classes.content}>
            <div>
                <img src="https://i.pinimg.com/originals/31/d8/07/31d8075c82022692d2056edebd26d995.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;