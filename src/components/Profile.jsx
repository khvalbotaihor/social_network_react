import React from "react";
import classes from "./Profile.module..css";

export const Profile = () =>{
    return (
        <div className={classes.content}>
            <div>
                <img src="https://i.pinimg.com/originals/31/d8/07/31d8075c82022692d2056edebd26d995.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    New Post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>post 1</div>
                    <div className={classes.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;