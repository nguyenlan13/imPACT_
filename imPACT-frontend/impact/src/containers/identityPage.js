import React, { Component } from 'react'
import { connect } from 'react-redux'
import IdentityForm from '../components/identities/identityForm'
import { addIdentity, getAllIdentities } from '../actions/identity'
import IdentityList from '../components/identities/identityList'
import { joinIdentity } from '../actions/identity'
import { Card } from 'antd'

class identityPage extends Component {

    componentDidMount(){
        this.props.get_all_identities()
    }

    submitHandler = async (pact_name, description) => {
        await this.props.add_identity(pact_name, description)
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
                <br/>
                <br/>
                {/* <div className="card"> */}
                <Card title="Current Pacts:" >
                    {/* <h3>Current Pacts</h3> */}
                    {sortedIdentities.map(identity => {
                        return <IdentityList
                        pact_name={identity.pact_name}
                        description={identity.description}
                        key={identity.id}
                        identityId={identity.id}
                        />
                    })}
                </Card>
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   const { token, identities, user } = state
   return {
       token: token,
       identities: identities.identities,
       user: user
   }
}

const mapDispatchToProps = (dispatch) => ({
    get_all_identities: () => dispatch(getAllIdentities()),
    add_identity: (pact_name, description) => dispatch(addIdentity(pact_name, description)),
    join_identity: (userId, identityId) => dispatch(joinIdentity(userId, identityId))
})

// export default identityPage

export default connect(mapStateToProps, mapDispatchToProps)(identityPage)




