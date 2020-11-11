import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/MyPosts";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount:12},
        {id: 2, message: "It's my first post", likesCount:11},
    ]

    let postsElement =
        posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;