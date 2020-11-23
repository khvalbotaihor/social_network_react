import React from "react";
//import {Field, reduxForm} from "redux-form";


const Login = (props) => {
    return (
        <div>
                        <textarea
                            value={props.value}
                            onChange={props.onChange}
                        ></textarea>
        </div>
    )
}

export default Login;


/*
const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field
                    placeholder={"inputField"}
                    name={"textInput"}
                    component={"textarea"}
                />
            </div>
            <div>
                <button onClick={props.onSendMessageClick}>Add Message</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:"textInput"})(LoginForm)

const Logina = (props) =>{
    const onSubmit = (formData) => {
        console.log(formData)
    }
}*/
