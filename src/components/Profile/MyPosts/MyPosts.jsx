import React from "react";
import classes from "./MyPosts.module.css";

export const MyPosts = () => {
    return (<div>
        my posts
        <div>
            New Post
        </div>
        <div className={classes.posts}>
            <div className={classes.item}>post 1</div>
            <div className={classes.item}>post 2</div>
        </div>
    </div>)
}

export default MyPosts;