import { LOG_IN_USER } from '../actionTypes'
import { SIGN_UP_USER } from '../actionTypes'
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
            dispatch({
                type: LOG_IN_USER,
                payload: loginJson
                // {
                //         email: email,
                //         password: password
                // }
            });
            // return await res.json()
        }catch(error){
            console.log(error.message)
        }
    }
}