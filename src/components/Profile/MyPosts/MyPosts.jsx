import React from "react";
import classes from "./MyPosts.module.css";

export const MyPosts = () => {
    return (<div>
        my posts
        <div>
            <textarea>

            </textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            <div className={classes.item}>post 1</div>
            <div className={classes.item}>post 2</div>
            <div className={classes.item}>post 2</div>
            <div className={classes.item}>post 2</div>
            <div className={classes.item}>post 2</div>
        </div>
    </div>)
}

export default MyPosts;