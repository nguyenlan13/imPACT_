import { 
    GET_ALL_IDENTITIES,
    GET_IDENTITY,
    GET_MY_IDENTITIES,
    ADD_IDENTITY,
    GET_IDENTITY_HABITS
} from '../actionTypes'

export default function identityReducer(state = {
    identities:[],
    identity:{},
    myIdentities:[],
    identityHabits:[]

}, action){
    console.log(action.payload)
    switch(action.type){
        case GET_ALL_IDENTITIES:
            return {...state, identities: action.payload}
        case GET_IDENTITY:
            return {...state, identity: action.payload}
        case GET_MY_IDENTITIES:
            return {...state, myIdentities: action.payload}
        case GET_IDENTITY_HABITS:
            return {...state, identityHabits: action.payload}
        case ADD_IDENTITY:
            return {...state, identities:[...state.identities, action.payload]}      
        default:
            return state
    }
}