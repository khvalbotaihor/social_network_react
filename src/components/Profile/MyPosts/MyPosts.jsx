import React from "react";
import classes from "./MyPosts.module.css";
import MyPost from "./Post/MyPosts";

export const MyPosts = () => {
    return (<div>
            <div className={classes.item}>
                <MyPost />
                <MyPost />
                <MyPost />
            </div>
        </div>
    )
}

export default MyPosts;