  
import React, { Component } from "react";
import { connect } from 'react-redux'
import { getHabit } from '../../actions/habit'

class habitItem extends Component {

    componentDidMount () {
        let habitId = this.props.match.params.habitId
        this.props.get_habit(habitId)
    }

    // handleJoin = async () => {
    //     const identityId = this.props.match.params.identityId
    //     await this.props.join_identity(this.props.csrf_token, identityId)
    // }

    render(){
        const { habit } = this.props
        console.log(this.props)
        if(!!habit.build) {
            return(

                <div>
                    <h1>Habit: </h1>
                    I WILL {habit.title} {habit.frequency_number} times {habit.frequency}
                </div>
            )
        }else {
         
            return(
                <div>
                    <h1>Habits: </h1>
                    I will STOP {habit.title} {habit.frequency_number} times {habit.frequency}
             
                    {/* <button onClick={this.handleJoin}>Join Pact</button>  */}
                </div>
            )
        
        }
    }
}

const mapStateToProps = (state) => {
    const { csrf_token, user, identities, habits} = state;
    return { 
        csrf_token: csrf_token, 
        user: user,
        identity: identities.identity,
        habit: habits.habit
    }
}

const mapDispatchToProps = dispatch => ({
    get_habit: (habitId) => dispatch(getHabit(habitId)),
    // join_identity: (csrf_token, identityId) => dispatch(joinIdentity(csrf_token, identityId))
})


export default connect(mapStateToProps, mapDispatchToProps)(habitItem)