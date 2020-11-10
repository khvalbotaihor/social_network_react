import React  from "react";
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <Link to="/profile"> Profile </Link>
            </div>
            <div className={`${classes.active} ${classes.item}`}>
                <Link to="/messages">Messages</Link>
            </div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar;