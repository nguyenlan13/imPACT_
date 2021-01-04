import { 
    GET_ALL_IDENTITIES,
    GET_IDENTITY,
    GET_MY_IDENTITIES,
    ADD_IDENTITY,
} from '../actionTypes'

export default function identityReducer(state = {
    identities:[],
    identity:{},
    myIdentities:[],

}, action){
    switch(action.type){
        case GET_ALL_IDENTITIES:
            return {...state, identities: action.payload}
        case GET_IDENTITY:
            return {...state, identity: action.payload}
        case GET_MY_IDENTITIES:
            return {...state, myIdentities: action.payload}
        case ADD_IDENTITY:
            return {...state, Identities:[...state.identities, action.payload]}      
        default:
            return state
    }
}