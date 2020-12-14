import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../components/Common/Preloader/preloader"
import {NavLink, Route} from "react-router-dom";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader />
    }
    return (
        <div >
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

                <hr/>
                <div>About me: {profile.aboutMe}</div>
                <div>Fullname: {profile.fullName}</div>
                <div>Looking for a job : {profile.lookingForAJob.toString()}</div>
                <div>Job secription: {profile.lookingForAJobDescription}</div>
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