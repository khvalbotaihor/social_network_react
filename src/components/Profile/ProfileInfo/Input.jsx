import React from "react";

export const textArea = (props) =>{

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        debugger;
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    debugger;
    return (
        <div>
            <div>
                    <textarea
                        ref={newPostElement}
                        value={props.value}
                        onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
    )
}

export default textArea;