  
import React, { Component } from "react";
import { Link } from 'react-router-dom'


class User extends Component {



    render(){

        const { name, username, userId} = this.props
        return(
            <div>
                <Link to={`/profile/${userId}`}> My Profile </Link>

            </div>
        )
    }
}


export default User