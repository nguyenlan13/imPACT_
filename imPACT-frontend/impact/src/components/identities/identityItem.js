  
import React, { Component } from "react";
import { Link } from 'react-router-dom'

class identityItem extends Component {

    render(){

        const { pact_name, description} = this.props
        return(
            <div>
                <Link to={"/identities"}> {pact_name} </Link>
            </div>
        )
    }
}

export default identityItem