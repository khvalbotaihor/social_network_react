import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" render={() => <Login/>}></Route>
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter,
    connect(null, {getAuthUserData })) (App);
