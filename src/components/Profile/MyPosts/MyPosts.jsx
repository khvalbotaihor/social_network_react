import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

export const MyPosts = (props) => {
    let postsElement =
        props.profilePage.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
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