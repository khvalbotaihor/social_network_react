import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div >
            <div>
                <img src="https://i.pinimg.com/originals/31/d8/07/31d8075c82022692d2056edebd26d995.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;