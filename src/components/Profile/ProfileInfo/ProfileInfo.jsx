import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../components/Common/Preloader/preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile){
        return <Preloader />
    }

    const onMainPhotoSelected = (e) =>{
       if ( e.target.files.length ){
           savePhoto(e.target.files[0]);
       }
    }

    return (
        <div >
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto } className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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