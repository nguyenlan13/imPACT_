import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMyHabits } from '../actions/habit' 

class Profile extends Component {

    componentDidMount(){
        
    }

    render(){
        
        return(
            <div className="page">
                <h1>My Profile</h1>


            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { csrf_token, habits, identities } = state
    return {
        csrf_token: csrf_token,
        myHabits: habits.myHabits,
        myIdentitites: identities.myIdentities
    }
 }
 



 const mapDispatchToProps = (dispatch) => ({
        get_my_habits: () => dispatch(getMyHabits()),
        // get_my_identities: () => dispatch(getMyIdentities())
 })


export default connect(mapStateToProps, mapDispatchToProps)(Profile)