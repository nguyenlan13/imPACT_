import { LOG_IN_USER } from '../actionTypes'
import { SIGN_UP_USER } from '../actionTypes'
import { GET_USER } from '../actionTypes'
import { LOGOUT } from '../actionTypes'

export const login = (csrf_token, email, password) => {
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({email, password}),
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            let loginJson = await res.json()
            console.log(loginJson)
            dispatch({
                type: LOG_IN_USER,
                payload: loginJson
                // {
                //         email: email,
                //         password: password
                // }
            });
            return loginJson
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}



export const signup = (csrf_token, email, name, username,  password) => {
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/signup", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({user:{email, name, username, password}}),
                credentials: 'include'
            })
            // if(!res.ok){
            //     throw res
            // }
            let signupJson = await res.json()
            if(!Object.keys(signupJson).includes("errors")){
                dispatch({
                    type: SIGN_UP_USER,
                    payload: signupJson
                // {
                //         email: email,
                //         password: password
                // }
            });
        }
        // return signupJson
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}


export const getUser = () => {
    return async function (dispatch) {
        try{
            const res = await fetch('http://localhost:3001/dashboard', {
                credentials: 'include'
            })
            if(!res.ok){
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