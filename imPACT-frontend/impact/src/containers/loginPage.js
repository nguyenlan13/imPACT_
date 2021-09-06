import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
// import { connect } from 'react-redux'
import LoginForm from '../components/login/loginForm'
// import { getToken } from '../actions/authSetup'
import { login } from '../actions/user'

// class loginPage extends Component {

//     //  componentDidMount(){
//     //     this.props.get_token()
//     //  }

//     submitHandler = async (email, password) => {
//         await this.props.login(email, password)
//         this.props.history.push("/dashboard")
//     }


//     render(){
//         return(
//             <div className="page">
//                 <h1>LOG IN:</h1>
//                 <LoginForm handleSubmit={this.submitHandler}/>
//             </div>
//         )
//     }
// }

// // const mapStateToProps = ({csrf_token}) => ({
// //     csrf_token
// // })

// const mapStateToProps = (state) => {
//     const { csrf_token, user } = state
//     return {
//         csrf_token: csrf_token,
//         user: user
//     }
//  }

// const mapDispatchToProps = (dispatch) => ({
//     get_token: () => dispatch(getToken()),
//     login: (csrf_token, email, password) => dispatch(login(csrf_token, email, password))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(loginPage)



export default function LoginPage(){

    const dispatch = useDispatch()

    const submitHandler = async (email, password) => {
        dispatch(login(email, password))
        // history.push("/dashboard")
    }
  
        return(
            <div className="page">
                <h1>LOG IN:</h1>
                <LoginForm onSubmit={submitHandler}/>
            </div>
        )
 
}
