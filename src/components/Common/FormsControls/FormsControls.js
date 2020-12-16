import React from 'react';
import styles from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error}, child, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            <span>
                {hasError && error}
            </span>
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>

    )
}

export const createField = (placeholder, name, component, validators, props={}, text="") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validators}
            {...props}
        />{text}
    </div>
)