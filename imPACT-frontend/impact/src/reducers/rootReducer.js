import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
import identityReducer from './identityReducer'
import habitReducer from './habitReducer'
import userReducer from './userReducer'


const rootReducer = (combineReducers) ({
    token: tokenReducer,
    user: userReducer,
    identities: identityReducer,
    habits: habitReducer


})

export default rootReducer