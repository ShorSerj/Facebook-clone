import React from 'react'
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import { required } from '../../utils/validators/validators'
import {Input } from '../common/FormsControls/FormsControls'
import { connect } from 'react-redux'
import {login} from '../../redux/auth-reducer'
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) =>{
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder='Email' name="email" validate={[required]} component={Input}/>
                </div>
                <div>
                    <Field placeholder="Password" name="password" type="password" validate={[required]} component={Input}/>
                </div>
                <div>
                    <Field component={Input} name="rememberMe" type="checkbox"/>Remember me CyC7jY4_YksF5Z8
                </div>
                 {error && <div className={style.formSummaryError}>
                    {error}
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