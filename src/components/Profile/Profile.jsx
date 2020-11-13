import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Dialogs from "../Dialogs/Dialogs";
import store from "../../redux/state";


export const Profile = (props) => {
    debugger;
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText = {props.updateNewPostText}

            />
        </div>
    )
}

export default Profile;