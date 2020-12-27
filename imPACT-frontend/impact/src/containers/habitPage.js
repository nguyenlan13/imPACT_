import React, { Component } from 'react'
import { connect } from 'react-redux'
import HabitForm from '../components/habits/habitForm'


class habitPage extends Component {


    submitHandler = async (name) => {
        await this.props.addHabit(this.props.csrf_token, name)
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
    // add_habit: (csrf_token, name) => dispatch(addHabit(csrf_token, name))
    })
export default connect(mapStateToProps, mapDispatchToProps)(habitPage)




