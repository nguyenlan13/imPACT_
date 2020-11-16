import { GET_ALL_IDENTITIES,
    GET_MY_IDENTITIES,
    ADD_IDENTITY,
    JOIN_IDENTITY
} from '../actionTypes'

export const getAllHabits = () => {
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/habits", {
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const habitJson = await res.json()
            dispatch({
                type: GET_ALL_IDENTITIES,
                payload: habitJson
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const addIdentity = (csrf_token, name, identityId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(`http://localhost:3001/identities/${IdentityId}`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({identity: {name}}),
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
