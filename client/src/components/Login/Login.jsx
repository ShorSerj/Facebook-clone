import React from 'react'
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import { connect } from 'react-redux'
import {login} from '../../redux/auth-reducer'
import style from '../common/FormsControls/FormsControls.module.css'

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
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div className="">
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }
    return (
        <main className={s.container}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </main>
    )
}

export default connect(null, {login}) (Login)