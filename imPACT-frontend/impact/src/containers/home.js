import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Home extends Component {

    render(){
        
        return(
            <div className="page">
                <h1>WELCOME!</h1>
               <Link to="/login">Log In</Link>  or  <Link to="/signup">Sign Up!</Link>
            </div>
        )
    }

}

export default Home