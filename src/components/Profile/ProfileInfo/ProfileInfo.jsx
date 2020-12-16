import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../components/Common/Preloader/preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   const [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }



    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>


            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Fullname</b>: {profile.fullName}</div>
            <div>
                <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && <div><b>My professional skills :</b>: {profile.lookingForAJobDescription}</div>}
            <div>
                <b>About me: </b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}

            </div>

        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle} </b>: {contactValue} </div>
}


export default ProfileInfo;