import { combineReducers } from 'redux'
import tokenReducer from './tokenReducer'


const rootReducer = (combineReducers) ({
    csrf_token: tokenReducer,


})

export default rootReducer