// import { GET_CSRF_TOKEN } from '../actionTypes'

// export const getToken = () => {
//     return async function (dispatch) {
//         try{
//             const res = await fetch("http://localhost:3001/auth", {
//                 credentials: 'include'
//             })
//             if(!res.ok){
//                 throw res
//             }
//             const tokenJson = await res.json()
//             const csrf_token = tokenJson.csrf_auth_token
//             dispatch({
//                 type: GET_CSRF_TOKEN,
//                 payload: csrf_token
//             })
//         }catch(error){
//             console.log(error)
//         }
//     }
// }

import { GET_TOKEN } from '../actionTypes'

export const getToken = () => {
    // return function (dispatch){
        try{
            return localStorage.getItem("token")
            // const token = localStorage.getItem("token")
            // dispatch({
            //     type: GET_TOKEN,
            //     payload: token
            // })
            // return token
        }catch(error){
            return null
        }
    // }
  
}