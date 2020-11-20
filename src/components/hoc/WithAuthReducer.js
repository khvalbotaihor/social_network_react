import React from 'react';
import {Redirect} from "react-router-dom";


export const WithAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return <ProfileContainer {...props} />
        }
    }
    return RedirectComponent;
}