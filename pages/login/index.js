import React from 'react'
import { Button } from "@mui/material"
import { auth, provider } from '../../utils/firebase'
import styles from "../../styles/Login.module.css"
import { actionTypes } from '../../utils/reducer'
import { useStateValue } from '../../utils/StoreProvider'

const Login = () => {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })


        }).catch((error) => alert(error.message))
    }

    return (
        <div className={styles.login}>
            <div className={styles.login__logo}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login