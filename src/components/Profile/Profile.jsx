import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount:12},
        {id: 2, message: "It's my first post", likesCount:11},
        {id: 3, message: "Blabla", likesCount:11},
        {id: 4, message: "Dada", likesCount:11},
    ]


    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;