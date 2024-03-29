import { LOG_IN_USER } from '../actionTypes'
import { SIGN_UP_USER } from '../actionTypes'
import { GET_USER } from '../actionTypes'
import { LOGOUT } from '../actionTypes'
import { getToken } from './authSetup'

export const login = (email, password) => {
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${csrf_token}`
                    // 'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({email, password})
            })
            if(!res.ok){
                throw new Error("login failed")
            }
            let loginJson = await res.json()
            // console.log(loginJson)
            localStorage.setItem("token", loginJson.token)
            dispatch({
                type: LOG_IN_USER,
                payload: loginJson
            });
            window.location.reload()
            return loginJson
        }catch(error){
            console.log(error.message)
            return error.message
        }
    }
}



export const signup = (email, name, username,  password) => {
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/signup", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${csrf_token}`
                    // 'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({user:{email, name, username, password}}),
                // credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            let signupJson = await res.json()
            localStorage.setItem("token", signupJson.token)
            if(!Object.keys(signupJson).includes("errors")){
                dispatch({
                    type: SIGN_UP_USER,
                    payload: signupJson
            });
            return signupJson
        }
        window.location.reload()
        }catch(error){
            console.log(error.message)
            return error.message
        }
    }
}


export const getUser = () => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch('http://localhost:3001/whoami', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            if(!res.ok){
                localStorage.removeItem("token")
                throw res
            }
            const userJson = await res.json()
            console.log(userJson)
            dispatch({
                type: GET_USER,
                payload: userJson
            })
        }catch(error){
            console.log(error)
        }
    }
}


export const logout = () => {
    try{
        localStorage.removeItem("token")
    }catch(error){
        console.log(error)
    } 
    window.location.reload()
}