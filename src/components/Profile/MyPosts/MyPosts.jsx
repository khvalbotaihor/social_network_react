import React from "react";
import classes from "./MyPosts.module.css";
import MyPost from "./Post/MyPosts";

export const MyPosts = () => {
    return (<div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>


            <div className={classes.item}>
                <MyPost message="Hi, how are you?" likesCount="0"/>
                <MyPost message="It's my first post" likesCount="23"/>
            </div>
        </div>
    )
}

export default MyPosts;