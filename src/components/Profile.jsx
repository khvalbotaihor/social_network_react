import React from "react";
import "./Profile.css";

export const Profile = () =>{
    return (
        <div className='content'>
            <div>
                <img src="https://i.pinimg.com/originals/31/d8/07/31d8075c82022692d2056edebd26d995.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    New Post
                </div>
                <div className="posts">
                    <div className="item">post 1</div>
                    <div className="item">post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;