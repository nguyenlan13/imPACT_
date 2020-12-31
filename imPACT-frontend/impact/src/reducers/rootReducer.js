import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
import identityReducer from './identityReducer'
import habitReducer from './habitReducer'


const rootReducer = (combineReducers) ({
    csrf_token: tokenReducer,
    identities: identityReducer,
    habits: habitReducer


})

export default rootReducer