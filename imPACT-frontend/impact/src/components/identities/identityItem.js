import React, { Component, useEffect } from "react";
import { connect } from 'react-redux'
// import { useDispatch, useSelector } from "react-redux";
import { getIdentity, joinIdentity, quitIdentity } from '../../actions/identity'
import { Card, Button } from 'antd'

class identityItem extends Component {

    componentDidMount = async () => {
       let identityId = this.props.match.params.identityId
        await this.props.get_identity(identityId)
    } 

    handleJoin = async () => {
        const identityId = this.props.match.params.identityId
        await this.props.join_identity(identityId) 
    }

    handleQuit = async () => {
        const identityId = this.props.match.params.identityId
        await this.props.quit_identity(identityId) 
    }

    render(){
        const { identity } = this.props
 
        return(
            <div>
                <Card title={identity.pact_name}>
                    Description: {identity.description}
                <br/>
                <br/>
                <Button onClick={this.handleJoin}>Join Pact</Button> 
                <Button onClick={this.handleQuit}>Leave Pact</Button> 
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { user, identities } = state;
    return { 
        user: user,
        identity: identities.identity
    }
}

const mapDispatchToProps = dispatch => ({
    get_identity: (identityId) => dispatch(getIdentity(identityId)),
    join_identity: (identityId) => dispatch(joinIdentity(identityId)),
    quit_identity: (identityId) => dispatch(quitIdentity(identityId))
})


export default connect(mapStateToProps, mapDispatchToProps)(identityItem)



// export default function IdentityItem({members}){

// //     const dispatch = useDispatch()
// //     // const identityId = useSelector((state) => state.identities.identity.id)
// //     const identityId = match.params.identityId

// // console.log(identityId)
// //     useEffect(() => {
// //         dispatch(getIdentity(identityId));
// //         // setError("");
// //     }, []);

//     // const identity = useSelector((state) => state.identities.identity)
// // console.log(identity)
//     return(
//         <div>
//             {/* <Card title={identity.pact_name}> */}
//             {/* <h1>{identity.pact_name}</h1> */}
//                 {/* {identity.description} */}
//                 {members}
//                 {/* {identity.users.map((user) =>(
//                    user.username
//             ))} */}

//             <br/>
//             {/* <Button onClick={this.handleJoin}>Join Pact</Button> 
//             <Button onClick={this.handleQuit}>Leave Pact</Button>  */}
//             {/* </Card> */}
//         </div>
//     )



// }