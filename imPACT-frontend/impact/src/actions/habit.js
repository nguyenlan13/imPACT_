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


export const addHabit = (csrf_token, name, habitId) => {
    return async function (dispatch) {
        try{
            let response = await fetch(`http://localhost:3001/habits/${habitId}`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({habit: {name}}),
                credentials: 'include'
            })
            if(!response.ok){
                throw response
            }
            let habitJson = await response.json()
            dispatch({
                type: ADD_HABIT,
                payload: 
                    habitJson
            })
        }catch(error){
            console.log(error.message)
        }
    }
}
