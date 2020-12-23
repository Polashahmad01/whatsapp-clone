import React from 'react'
import { Button } from '@material-ui/core';

import './Login.css';
import { auth, provider } from '../firebase/firebase';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../reducer/reducer';

const Login = () => {
    const [{}, dispatch ] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then( result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch( error => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png`}
                    alt="WhatsApp"
                />
                <div className="login__text">
                    <h2>Sign in to WhatsApp</h2>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login