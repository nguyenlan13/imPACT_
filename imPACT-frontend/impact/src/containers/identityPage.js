import React, { Component } from 'react'
import { connect } from 'react-redux'
import IdentityForm from '../components/identities/identityForm'
import { addIdentity, getAllIdentities } from '../actions/identity'
import IdentityItem from '../components/identities/identityItem'

class identityPage extends Component {

    componentDidMount(){
        this.props.get_all_identities()
    }

    submitHandler = async (pact_name, description) => {
        await this.props.add_identity(this.props.csrf_token, pact_name, description)
        // this.props.history.push("/profile")
    }


    render(){
        const { identities } = this.props
        const sortedIdentities = identities.sort(function(a,b){
            if(a.pact_name < b.pact_name) {return -1;}
            if(a.pact_name > b.pact_name) {return 1;}
            return 0
        })
        return(
            <div className="page">
                <h1>Add an Identity:</h1>
                <IdentityForm handleSubmit={this.submitHandler}/>
                {sortedIdentities.map(identity => {
                    return <IdentityItem
                    pact_name={identity.pact_name}
                    description={identity.description}
                    
                    />
                })}
                
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
    get_all_identities: () => dispatch(getAllIdentities()),
    add_identity: (csrf_token, pact_name, description) => dispatch(addIdentity(csrf_token, pact_name, description))
})

// export default identityPage

export default connect(mapStateToProps, mapDispatchToProps)(identityPage)




