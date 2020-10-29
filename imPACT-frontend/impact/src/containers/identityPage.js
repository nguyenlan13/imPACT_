import React, { Component } from 'react'
import { connect } from 'react-redux'
import IdentityForm from '../components/identities/identityForm'
// import { addIdentity } from '../actions/identity'

class identityPage extends Component {

    submitHandler = async (name) => {
        await this.props.addIdentity(this.props.csrf_token, name)
        // this.props.history.push("/profile")
    }


    render(){
        return(
            <div className="page">
                <h1>Add an Identity:</h1>
                {/* <IdentityForm/> */}
                <IdentityForm handleSubmit={this.submitHandler}/>
            </div>
        )
    }
}

const mapStateToProps = ({csrf_token}) => ({
    csrf_token
})

const mapDispatchToProps = (dispatch) => ({
    // add_dentity: (csrf_token, name) => dispatch(addIdentity(csrf_token, name))
})

// export default identityPage

export default connect(mapStateToProps, mapDispatchToProps)(identityPage)




