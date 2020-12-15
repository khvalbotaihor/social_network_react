import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "../src/components/Common/Preloader/preloader"
import store from "./redux/react-redux";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>

        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={withSuspense(DialogsContainer)}  />
                    <Route path="/profile/:userId?"
                           render={withSuspense(ProfileContainer)}  />
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" render={() => <Login/>} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) =>{
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;