import React from 'react'
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'

const LoginForm = (props) =>{
    return (
            <form onSubmit={props.handleSubmit}>
                <div className="">
                    <Field name={"email"} id="" placeholder={'Email'} component={Input} validate={[required]}/>
                </div>
                <div className="">
                    <Field name={"password"} id="" placeholder={'Password'} validate={[required]} component={Input}/>
                </div>
                <div className="">
                    <Field component={"input"} name={"rememberMe"}type={"checkbox"} name="" id="" />Remember me
                </div>
                <div className="">
                    <button>Submit form</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <main className={s.container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </main>
    )
}

export default Login