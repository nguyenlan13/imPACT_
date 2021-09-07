import { 
    // GET_CSRF_TOKEN
    GET_TOKEN
} from '../actionTypes'

export default function tokenReducer(state="", action){

    switch(action.type){
        case GET_TOKEN:
                return action.payload
        default:
            return state
    }
}