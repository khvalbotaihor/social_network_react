import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTubyb9WhTgpvPRNhyJziWioWCHhAXMgY7zSg&usqp=CAU"
                alt=""/>
                <div className={classes.loginBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
        </header>
    )
}

export default Header;