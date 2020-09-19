import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/login/loginForm'
import { getToken } from '../actions/authSetup'

class loginPage extends Component {

     componentDidMount(){
        this.props.get_token()
     }

    submitHandler = async (email, password) => {
        
    }


    render(){
        
        return(
            <div>

            </div>
        )
    }

}

const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})

const mapDispatchToProps = (dispatch) => ({
    get_token: () => dispatch(getToken())
})

export default connect(mapStateToProps, mapDispatchToProps)(loginPage)