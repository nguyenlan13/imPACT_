import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/signup/signupForm'
import { getToken } from '../actions/authSetup'
import { signup } from '../actions/user'


class signupPage extends Component {

    componentDidMount(){
        this.props.get_token()
    }

    submitHandler = async (email, name, username, password) => {
        await this.props.signup(this.props.csrf_token, email, name, username, password)
        this.props.history.push("/dashboard")
    }

    render(){
        
        return(
            <div className="page">
            <h1>SIGN UP:</h1>
            <SignupForm handleSubmit={this.submitHandler}/>
            </div>
        )
    }
}

const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})

const mapDispatchToProps = (dispatch) => ({
    get_token: () => dispatch(getToken()),
    signup: (csrf_token, email, name, username, password) => dispatch(signup(csrf_token, email, name, username, password))
})


export default connect(mapStateToProps, mapDispatchToProps)(signupPage)

