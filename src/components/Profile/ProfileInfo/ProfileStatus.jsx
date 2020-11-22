import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        console.log("local state: " + this.state.status)
        console.log("global state: " + this.props.status)

        return (
            <div>
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

            </div>
        )
    }
}

export default ProfileStatus;