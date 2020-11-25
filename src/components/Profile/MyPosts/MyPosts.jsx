import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/MyPosts";
import {Field, reduxForm} from "redux-form";

export const MyPosts = (props) => {
    let postsElement =
        props.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

    let onAddPost = (value) => {
        props.addPost(value.NewPostText);

    }

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={classes.item}>
                {postsElement}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field
                        placeholder="Add new post"
                        name="NewPostText"
                        component="textarea"

                    />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "addNewPost"})(AddNewPostForm)


export default MyPosts;