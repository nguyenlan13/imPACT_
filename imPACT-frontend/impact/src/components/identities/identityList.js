  
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import identityItem from "./identityItem";

class identityList extends Component {



    render(){

        const { pact_name, description, identityId, users} = this.props

        const members = users.map((user) => {
                    return user.username
            })

        return(
            <div>
                {/* <identityItem members={members} identityId={identityId} />{pact_name} - {description} */}
                <Link to={`/identities/${identityId}`}> {pact_name} - {description} </Link>

               {/* {members}! */}

            </div>
        )
    }
}


export default identityList