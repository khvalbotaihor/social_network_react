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


    /*
        componentDidUpdate(prevProps,prevState ) {
            if (prevProps.status !== this.props.status){
                this.setState({
                    status: this.props.status
                })
            }

            let a = this.state;
            let b = this.props;

            console.log("componentDidUpdate")
        }*/

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
        /*    <div>
                        {this.state.editMode
                            ? <div>
                                <input autoFocus={true}
                                       onBlur={this.deactivateEditMode}
                                       value={this.state.status}
                                       onChange={this.onStatusChange}
                                ></input>
                            </div>
                            : <div>
                                <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                            </div>
                        }

                    </div>*/
    )
}

export default ProfileStatusWithHooks;