import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)

    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    console.log("render")
    return (
        <div>
            {editMode
                ? <div>
                    <input
                        value={status}
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        onChange={onStatusChange}
                    ></input>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
            }

        </div>
    )
}

export default ProfileStatusWithHooks;