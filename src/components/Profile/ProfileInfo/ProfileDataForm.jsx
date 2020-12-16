import React from "react";
import {createField, Input, TextArea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>

        <div>
            <button onClick={() => { }}>save
            </button>
        </div>
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", Input, [])}
        </div>
        <div>
            <b>Looking for a job</b> : {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills: </b>: {createField("My professional skills ", "lookingForAJobDescription", TextArea, [])}
        </div>
        <div>
            <b>About me: </b>: {createField("About me", "aboutMe", TextArea, [])}
        </div>
        {/*  <div>
            <b>Contacts: </b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}

        </div>*/}

    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;