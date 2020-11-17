import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile"
                         activeClassName={classes.activeLink}
                > Profile </NavLink>
            </div>
            <div className={`${classes.active} ${classes.item}`}>
                <NavLink to="/dialogs"
                         activeClassName={classes.activeLink}
                >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users"
                         activeClassName={classes.activeLink}
                >Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news"
                         activeClassName={classes.activeLink}
                >News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="./music"
                         activeClassName={classes.activeLink}
                >Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings"
                         activeClassName={classes.activeLink}
                >Settings</NavLink>
            </div>

            <FriendsContainer />
        </nav>
    )
}

export default Navbar;