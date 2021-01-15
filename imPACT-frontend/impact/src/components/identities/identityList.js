  
import React, { Component } from "react";
import { Link } from 'react-router-dom'


class identityList extends Component {



    render(){

        const { pact_name, description, identityId} = this.props
        return(
            <div>
                <Link to={`/identities/${identityId}`}> {pact_name} - {description} </Link>

            </div>
        )
    }
}


export default identityList