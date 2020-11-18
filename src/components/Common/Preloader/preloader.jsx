import React from 'react';
import styles from './preloader.module.css'

const preloader = () =>{
    return(
        <div className={styles["lds-ring"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default preloader;