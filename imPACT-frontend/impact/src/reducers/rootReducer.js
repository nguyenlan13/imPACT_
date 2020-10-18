import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'
import identityReducer from './identityReducer'


const rootReducer = (combineReducers) ({
    csrf_token: tokenReducer,
    identity: identityReducer,


})

export default rootReducer