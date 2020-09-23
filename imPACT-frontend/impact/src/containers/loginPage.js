import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/login/loginForm'
import { getToken } from '../actions/authSetup'
import { login } from '../actions/user'

class loginPage extends Component {

     componentDidMount(){
        this.props.get_token()
     }

    submitHandler = async (email, password) => {
        await this.props.login(this.props.csrf_token, email, password)
        
    }


    render(){
        
        return(
            <div>
                <LoginForm handleSubmit={this.submitHandler}/>
            </div>
        )
    }

}

const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})

const mapDispatchToProps = (dispatch) => ({
    get_token: () => dispatch(getToken()),
    login: (csrf_token, email, password) => dispatch(login(csrf_token, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(loginPage)