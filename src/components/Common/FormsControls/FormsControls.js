import React from 'react';
import styles from './FormsControls.module.css'

export const TextArea = ({input, meta, ...props}) =>{
    return (
        <div className={styles.formControl + " " + styles.error}>
            <textarea {...input} {...props} />
        </div>
    )
}