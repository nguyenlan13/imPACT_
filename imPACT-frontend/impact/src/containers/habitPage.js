import React, { Component } from 'react'
import { connect } from 'react-redux'
import HabitForm from '../components/habits/habitForm'
import { getAllHabits } from '../actions/habit'
import { addHabit } from '../actions/habit'

class habitPage extends Component {


    submitHandler = async (build, title) => {
        await this.props.add_Habit(this.props.csrf_token, build, title)
        // this.props.history.push("/profile")
    }
    render() {
        return(
            <div className="page">
            <h1>Add a New Habit:</h1>
            <HabitForm handleSubmit={this.submitHandler}/>
            </div>
            
        )
    }
       

    
}


const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})
    
const mapDispatchToProps = (dispatch) => ({
    add_habit: (csrf_token, build, title) => dispatch(addHabit(csrf_token, build, title))
})


export default connect(mapStateToProps, mapDispatchToProps)(habitPage)




