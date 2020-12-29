import { GET_ALL_IDENTITIES,
    GET_MY_IDENTITIES,
    ADD_IDENTITY,
    JOIN_IDENTITY
} from '../actionTypes'

export const getAllIdentities = () => {
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/identities", {
                credentials: 'include'
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

export const addIdentity = (csrf_token, name) => {
    return async function (dispatch) {
        try{
            let response = await fetch("http://localhost:3001/identities",{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                // body: JSON.stringify({identity: {name}}),
                    body: JSON.stringify(name),
                credentials: 'include'
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
