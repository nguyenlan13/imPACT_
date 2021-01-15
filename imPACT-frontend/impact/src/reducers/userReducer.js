import { 
    LOG_IN_USER,
    SIGN_UP_USER,
    LOGOUT,
    JOIN_IDENTITY
} from '../actionTypes'

export default function userReducer(state = {
    isAuthenticated: false,
    user:{}
}, action){
console.log(user)
    switch(action.type){
        case LOG_IN_USER: 
            return {user:[...action.payload], isAuthenticated: true}
        case SIGN_UP_USER:
            return {user:[...action.payload], isAuthenticated: true}
        case LOGOUT:
            return {...state, isAuthenticated: false}
        case JOIN_IDENTITY:
            return {...action.payload}
        default:
            return state
    }
}