import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/MyPosts";
import {Field, reduxForm} from "redux-form";

export const MyPosts = (props) => {
    let postsElement =
        props.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    let addNewPost = (value) => {
        alert(value.addNewPost)
    }

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostFormRedux onSubmit={addNewPost}/>

            <div className={classes.item}>
                {postsElement}
            </div>
        </div>
    )
}

const AddNewForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field
                        placeholder="Add new post"
                        name="addNewPost"
                        component="textarea"

                    />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "addNewPost"})(AddNewForm)


export default MyPosts;