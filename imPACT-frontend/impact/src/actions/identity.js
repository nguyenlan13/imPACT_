import { 
    GET_ALL_IDENTITIES,
    GET_MY_IDENTITIES,
    GET_IDENTITY,
    GET_IDENTITY_HABITS,
    ADD_IDENTITY,
    JOIN_IDENTITY,
    QUIT_IDENTITY
} from '../actionTypes'
import { getToken } from './authSetup'

export const getAllIdentities = () => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch("http://localhost:3001/identities?showall=1", {
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
    console.log(identityId)
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
            return identityJson
        }catch(error){
            console.log(error)
        }
    }
}

export const getIdentityHabits = (identityId) => {
    console.log(identityId)
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch(`http://localhost:3001/identities/${identityId}/habits`, {
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
                type: GET_IDENTITY_HABITS,
                payload: identityJson
            })
            return identityJson
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


export const getMyIdentities = () => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch(`http://localhost:3001/identities`, {
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
                body: JSON.stringify({ identity_id: identityId }),
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

export const quitIdentity = (identityId) => {
    console.log(identityId)
    return async function (dispatch) {
        try{
            const token = getToken()
            let response = await fetch("http://localhost:3001/leave",{
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ identity_id: identityId }),
            })
            if(!response.ok){
                throw response
            }
            let identityJson = await response.json()
            dispatch({
                type: QUIT_IDENTITY,
                payload: 
                    identityJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}