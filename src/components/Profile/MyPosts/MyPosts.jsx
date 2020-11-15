import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/MyPosts";

export const MyPosts = (props) => {
    let postsElement =
        props.profilePage.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.profilePage.newPostText}
                        onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.item}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;