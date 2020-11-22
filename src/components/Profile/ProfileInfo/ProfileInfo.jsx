import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../components/Common/Preloader/preloader"
import {NavLink, Route} from "react-router-dom";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader />
    }
    return (
        <div >
            {/*<div>
                <img src="https://i.pinimg.com/originals/31/d8/07/31d8075c82022692d2056edebd26d995.jpg" />
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status}/>

                <hr/>
                <div>About me: {props.profile.aboutMe}</div>
                <div>Fullname: {props.profile.fullName}</div>
                <div>Looking for a job : {props.profile.lookingForAJob.toString()}</div>
                <div>Job secription: {props.profile.lookingForAJobDescription}</div>
                <div> <a to="facebook.com" target="_blank">Facebook</a></div>
                <div> <a href="github.com" target="_blank">github</a></div>
                <div><a href="instagra.com/sds" target="_blank">instagram</a></div>
                <div> <a href="" target="_blank">mainLink</a></div>
                <div> <a href="https://twitter.com/@sdf" target="_blank">twitter</a></div>
                <div> <a href="vk.com/dimych" target="_blank">vk</a></div>
                <div> <a href="" target="_blank">website</a></div>
                <div> <a href="" target="_blank">youtube</a></div>
                <hr/>
            </div>
        </div>
    )
}

export default ProfileInfo;