import React, { Component } from 'react'
import { connect } from 'react-redux'
import IdentityForm from '../components/identities/identityForm'
import { addIdentity } from '../actions/identity'

class identityPage extends Component {

    submitHandler = async (pact_name, description) => {
        await this.props.add_identity(this.props.csrf_token, pact_name, description)
        // this.props.history.push("/profile")
    }


    render(){
        return(
            <div className="page">
                <h1>Add an Identity:</h1>
                <IdentityForm handleSubmit={this.submitHandler}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   const { csrf_token, identities } = state
   return {
       csrf_token: csrf_token,
       identities: identities.identities
   }
}

const mapDispatchToProps = (dispatch) => ({
    add_identity: (csrf_token, pact_name, description) => dispatch(addIdentity(csrf_token, pact_name, description))
})

// export default identityPage

export default connect(mapStateToProps, mapDispatchToProps)(identityPage)




