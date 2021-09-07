import { GET_ALL_IDENTITIES,
    GET_MY_IDENTITIES,
    GET_IDENTITY,
    ADD_IDENTITY,
    JOIN_IDENTITY
} from '../actionTypes'
import { getToken } from './authSetup'

export const getAllIdentities = () => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch("http://localhost:3001/identities", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                // credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const identityJson = await res.json()
            dispatch({
                type: GET_ALL_IDENTITIES,
                payload: identityJson
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const getIdentity = (identityId) => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch(`http://localhost:3001/identities/${identityId}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                // credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const identityJson = await res.json()
            console.log(identityJson)
            dispatch({
                type: GET_IDENTITY,
                payload: identityJson
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const addIdentity = (pact_name, description) => {
    return async function (dispatch) {
        try{
            const token = getToken()
            let response = await fetch("http://localhost:3001/identities",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({identity: {pact_name, description}}),
                // credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let identityJson = await response.json()
            dispatch({
                type: ADD_IDENTITY,
                payload: 
                    identityJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}


export const getMyIdentities = (userId) => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch(`http://localhost:3001/users/${userId}/identities`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                // credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const identityJson = await res.json()
            dispatch({
                type: GET_MY_IDENTITIES,
                payload: identityJson
            })
        }catch(error){
            console.log(error)
        }
    }
}


export const joinIdentity = (identityId) => {
    console.log(identityId)
    return async function (dispatch) {
        try{
            const token = getToken()
            let response = await fetch("http://localhost:3001/join",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                //  This sends the payload that looks like this:
                //  {
                //    "user_identity": {
                //       {
                //          user: {}
                //          user_identity: "1"
                //       }
                //     }
                //  }
                //  Version #1
                //body: JSON.stringify({user_identity: {user: user, identity_id: identityId}}),

                //  Version #2
                body: JSON.stringify({ identity_id: identityId }),
                // credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let identityJson = await response.json()
            dispatch({
                type: JOIN_IDENTITY,
                payload: 
                    identityJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}