  
import React, { Component } from "react";
import { connect } from 'react-redux'
import { getIdentity, joinIdentity } from '../../actions/identity'

class identityItem extends Component {

    componentDidMount () {
        let identityId = this.props.match.params.identityId
        this.props.get_identity(identityId)
    }

    handleJoin = async () => {
        const identityId = this.props.match.params.identityId
        await this.props.join_identity(this.props.csrf_token, identityId)
        
    }

    render(){
        const { identity } = this.props
        return(
            <div>
                <h1>Pacts</h1>
              {identity.pact_name}- {identity.description}
         
                <button onClick={this.handleJoin}>Join Pact</button> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { csrf_token, user, identities } = state;
    return { 
        csrf_token: csrf_token, 
        user: user,
        identity: identities.identity
    }
}

const mapDispatchToProps = dispatch => ({
    get_identity: (identityId) => dispatch(getIdentity(identityId)),
    join_identity: (csrf_token, identityId) => dispatch(joinIdentity(csrf_token, identityId))
})


export default connect(mapStateToProps, mapDispatchToProps)(identityItem)