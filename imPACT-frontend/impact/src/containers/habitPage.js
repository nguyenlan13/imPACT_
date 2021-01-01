import React, { Component } from 'react'
import { connect } from 'react-redux'
import HabitForm from '../components/habits/habitForm'
import { getAllHabits } from '../actions/habit'
import { addHabit } from '../actions/habit'
import HabitItem from '../components/habits/habitItem'

class habitPage extends Component {

    componentDidMount(){
        this.props.get_all_habits()
    }

    submitHandler = async (build, title, frequency_number, frequency) => {
        await this.props.add_habit(this.props.csrf_token, build, title, frequency_number, frequency)
        this.props.history.push("/profile")
    }

    render() {
        const { habits } = this.props
        const sortedHabits = habits.sort(function(a,b){
            if(a.title < b.title) {return -1;}
            if(a.title > b.title) {return 1;}
            return 0
        })    
        return(
            <div className="page">
            <h1>Add a New Habit:</h1>
            <HabitForm handleSubmit={this.submitHandler}/>
            {sortedHabits.map(habit => {
                    return <HabitItem
                    title={habit.title}
                    frequency_number={habit.frequency_number}
                    // frequency={habit.frequency}
                    />
                })}
            </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    const { csrf_token, habits } = state
    return {
        csrf_token: csrf_token,
        habits: habits.habits
    }
 }
    
const mapDispatchToProps = (dispatch) => ({
    get_all_habits: () => dispatch(getAllHabits()),
    add_habit: (csrf_token, build, title, frequency_number, frequency) => dispatch(addHabit(csrf_token, build, title, frequency_number, frequency))
})


export default connect(mapStateToProps, mapDispatchToProps)(habitPage)




