import React from 'react';
import styles from './FormsControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            <span>
                {hasError && meta.error}
            </span>
        </div>
    )
}

export const TextArea = (props) => {
const {input, meta, child, ...restProps} =props
    return (
        <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} =props
    return (
        <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>

    )
}