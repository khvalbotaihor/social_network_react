import React from "react";
import classes from "./MyPost.module.css";

export const MyPost = (props) => {
    return (<div>
            <div className={classes.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbJjaUVrc9az_B1Rqphs0EULawVrCg_mBMIg&usqp=CAU"/>
                {props.message}
                <div><span>like {props.likesCount}</span></div>
            </div>
        </div>

    )
}

export
default MyPost;