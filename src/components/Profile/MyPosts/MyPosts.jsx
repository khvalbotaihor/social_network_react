import React from "react";
import classes from "./MyPosts.module.css";

export const MyPosts = () => {
    return (<div>
        my posts
        <div>
            <textarea>

            </textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            <div className={classes.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbJjaUVrc9az_B1Rqphs0EULawVrCg_mBMIg&usqp=CAU" alt=""/>
                post 1</div>
            <div className="item">post 2</div>
            <div className="item">post 2</div>
            <div className="item">post 2</div>
            <div className="item">post 2</div>
        </div>
    </div>)
}

export default MyPosts;