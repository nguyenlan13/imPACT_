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