import { 
    ADD_STEP
} from '../actionTypes'

import { getToken } from './authSetup'

export const addStep = (csrf_token, name, stepId, userId) => {
    return async function (dispatch) {
        try{
            const token = getToken()
            let response = await fetch(`http://localhost:3001/habits/${stepId}`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({step: {name, userId, stepId}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let stepJson = await response.json()
            dispatch({
                type: ADD_STEP,
                payload: 
                    stepJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}