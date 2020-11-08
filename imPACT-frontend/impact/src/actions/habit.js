import { GET_ALL_HABITS,
        GET_MY_HABITS,
        ADD_HABIT
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
                type: GET_ALL_HABITS,
                payload: habitJson
            })
        }catch(error){
            console.log(error)
        }
    }
}



