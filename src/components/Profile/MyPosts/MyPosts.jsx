import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/MyPosts";

export const MyPosts = (props) => {
    let postsElement =
        props.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.store.updateNewPostText(text);
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.item}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;