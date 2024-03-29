import { 
    GET_ALL_HABITS,
    GET_HABIT,
    GET_MY_HABITS,
    ADD_HABIT,
} from '../actionTypes'


export default function habitReducer(state = {
    habits:[],
    habit:{},
    myHabits:[]

}, action){

    switch(action.type){
        case GET_ALL_HABITS:
            return {...state, habits: action.payload}
        case GET_HABIT:
            return {...state, habit: action.payload}
        case GET_MY_HABITS:
            return {...state, myHabits: action.payload}
        case ADD_HABIT:
            return {...state, myHabits: [...state.myHabits, action.payload]}      
        default:
            return state
    }
}