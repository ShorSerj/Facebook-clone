import React from "react"
import { connect } from 'react-redux'
import Login from '../components/Login/Login';
import {Route, Routes} from 'react-router-dom';


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) {
                return (
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                );
            }
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}