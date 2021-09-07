import React, { Component } from 'react'
import { connect } from 'react-redux'
import HabitForm from '../components/habits/habitForm'
import { getAllHabits } from '../actions/habit'
import { addHabit } from '../actions/habit'
import HabitList from '../components/habits/habitList'
import { Card } from 'antd'

class habitPage extends Component {

    componentDidMount(){
        this.props.get_all_habits()
    }

    submitHandler = async (build, title, frequency_number, frequency) => {
        await this.props.add_habit(build, title, frequency_number, frequency)
        // this.props.history.push("/profile")
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
                <Card title="Current Habits:">
                    {sortedHabits.map(habit => {
                        return  <HabitList
                        build={habit.build}
                        title={habit.title}
                        frequency_number={habit.frequency_number}
                        frequency={habit.frequency}
                        key={habit.id}
                        habitId={habit.id}
                        />
                    })}
                </Card>
                <br/>
                <HabitForm handleSubmit={this.submitHandler}/>
            </div> 
        )
    }
}


const mapStateToProps = (state) => {
    const { habits } = state
    return {

        habits: habits.habits
    }
 }
    
const mapDispatchToProps = (dispatch) => ({
    get_all_habits: () => dispatch(getAllHabits()),
    add_habit: (build, title, frequency_number, frequency) => dispatch(addHabit(build, title, frequency_number, frequency))
})


export default connect(mapStateToProps, mapDispatchToProps)(habitPage)




