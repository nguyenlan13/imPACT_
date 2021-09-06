import { 
    LOG_IN_USER,
    SIGN_UP_USER,
    GET_USER,
    LOGOUT,
    JOIN_IDENTITY
} from '../actionTypes'

export default function userReducer(state = {
    isAuthenticated: false,
    // token:"",
    user:{}
}, action){
console.log(action.payload)
    switch(action.type){
        case LOG_IN_USER: 
            return {...action.payload, isAuthenticated: true}
        case SIGN_UP_USER:
            return {...action.payload, isAuthenticated: true}
        case GET_USER:
            return {...state, user: action.payload, isAuthenticated: true}    
        case LOGOUT:
            return {...state, isAuthenticated: false}
        case JOIN_IDENTITY:
            return {...action.payload}
        default:
            return state
    }
}