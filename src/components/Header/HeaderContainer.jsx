import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";

class HeaderContainer extends React.Component{
    render() {
        return <Header />
    }


}

export default HeaderContainer;