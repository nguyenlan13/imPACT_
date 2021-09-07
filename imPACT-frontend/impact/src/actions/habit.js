import { GET_ALL_HABITS,
        GET_MY_HABITS,
        GET_HABIT,
        ADD_HABIT
    } from '../actionTypes'

import { getToken } from './authSetup'

export const getAllHabits = () => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch("http://localhost:3001/habits?showall=1", {
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

export const getHabit = (habitId) => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch(`http://localhost:3001/habits/${habitId}`, {
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
            const habitJson = await res.json()
            console.log(habitJson)
            dispatch({
                type: GET_HABIT,
                payload: habitJson
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const getMyHabits = () => {
    return async function (dispatch) {
        try{
            const token = getToken()
            const res = await fetch(`http://localhost:3001/habits`, {
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
            const habitJson = await res.json()
            dispatch({
                type: GET_MY_HABITS,
                payload: habitJson
            })
        }catch(error){
            console.log(error)
        }
    }
}


export const addHabit = (build, title, frequency_number, frequency) => {
    return async function (dispatch) {
        try{
            const token = getToken()
            let response = await fetch('http://localhost:3001/habits/',{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({habit: {build, title, frequency_number, frequency}}),
                // credentials: 'include'
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
