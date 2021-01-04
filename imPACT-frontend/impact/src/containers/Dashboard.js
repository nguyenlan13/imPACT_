import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { addIdentity, getAllIdentities, joinIdentity } from '../actions/identity'
import { addHabit, getAllHabits } from '../actions/habit'
import IdentityList from '../components/identities/identityList'
// import IdentityForm from '../components/identities/identityForm'

class Dashboard extends Component {

    componentDidMount(){
        this.props.get_all_identities()
    }


    render(){

        const { habits, identities } = this.props

        
        return(
            <div className="page">
                <h1>Dashboard</h1>
                <div className="card">
                    Join a Pact:
                {identities.map(identity => {
                        return <IdentityList
                        pact_name={identity.pact_name}
                        description={identity.description}
                        key={identity.id}
                        identityId={identity.id}
                        />
                    })}
                </div>
                <div className="card">
                    <Link to="/identities">Add an IDentity</Link>
                </div>
                <div className="card">
                    <Link to="/habits">Create a new Habit</Link>
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state) => {
    const { csrf_token, habits, identities, user } = state
    return {
        csrf_token: csrf_token,
        habits: habits.habits,
        habit: habits.habit,
        identities: identities.identities,
        identity: identities.identitiy,
        user: user
    }
 }
    
const mapDispatchToProps = (dispatch) => ({
    get_all_habits: () => dispatch(getAllHabits()),
    add_habit: (csrf_token, build, title, frequency_number, frequency) => dispatch(addHabit(csrf_token, build, title, frequency_number, frequency)),
    get_all_identities: () => dispatch(getAllIdentities()),
    add_identity: (csrf_token, pact_name, description) => dispatch(addIdentity(csrf_token, pact_name, description)),
    join_identity: (userId, identityId) => dispatch(joinIdentity(userId, identityId))
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
