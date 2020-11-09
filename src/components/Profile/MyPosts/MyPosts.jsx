import React from "react";
import classes from "./MyPosts.module.css";
import MyPost from "./Post/MyPosts";

export const MyPosts = () => {
    return (<div>
            <div className={classes.item}>
                <MyPost message="Hi, how are you?"/>
                <MyPost message="It's my first post"/>
            </div>
        </div>
    )
}

export default MyPosts;