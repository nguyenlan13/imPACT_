import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import SignupForm from '../components/signup/signupForm'
import { signup } from '../actions/user'
// import { connect } from 'react-redux'
// import { getToken } from '../actions/authSetup'

export default function SignupPage(){

    const dispatch = useDispatch()

    const submitHandler = async (email, name, username, password) => {
        dispatch(signup(email, name, username, password))
    }
  
    if(localStorage.getItem("token") !== null) {
        return <Redirect to="/dashboard" />
    }

    return(
        <div className="page">
            <SignupForm onSubmit={submitHandler}/>
        </div>
    )
}


// class signupPage extends Component {

//     submitHandler = async (email, name, username, password) => {
//         await this.props.signup(email, name, username, password)
//         if(localStorage.getItem("token") !== null) {
//             return <Redirect to="/dashboard" />
//         }
//         // this.props.history.push("/dashboard")
//     }

//     render(){
//         return(
//             <div className="page">
//             <SignupForm handleSubmit={this.submitHandler}/>
//             </div>
//         )
//     }
// }

// const mapStateToProps = () => ({
    
// })

// const mapDispatchToProps = (dispatch) => ({
//     signup: (email, name, username, password) => dispatch(signup(email, name, username, password))
// })


// export default connect(mapStateToProps, mapDispatchToProps)(signupPage)

