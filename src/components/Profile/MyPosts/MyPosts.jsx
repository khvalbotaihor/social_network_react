import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/MyPosts";
import TextArea from "../ProfileInfo/Input";

export const MyPosts = (props) => {
    let postsElement =
        props.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)


    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <TextArea value={props.newPostText}
                      addPost={props.addPost}
                      updateNewPostText={props.updateNewPostText}
            />
{/*            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>*/}
            <div className={classes.item}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;