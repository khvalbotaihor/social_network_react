import React from "react";
import classes from "./MyPosts.module.css";
import MyPost from "./Post/MyPosts";

export const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hi, how are you?", likesCount:12},
        {id: 2, message: "It's my first post", likesCount:11},

    ]

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={classes.item}>
                <MyPost message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <MyPost message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;