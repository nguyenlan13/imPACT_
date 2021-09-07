import React, { Component, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { connect, useDispatch, useSelector } from 'react-redux'
import { Card, Menu, Dropdown, Button, Row, Col } from 'antd';
import { addIdentity, getAllIdentities, joinIdentity } from '../actions/identity'
import { addHabit, getAllHabits } from '../actions/habit'
// import { getUser } from '../actions/user'
import IdentityList from '../components/identities/identityList'
// import IdentityForm from '../components/identities/identityForm'


export default function Dashboard(){

        const dispatch = useDispatch()
        const user = useSelector((state) => state.user.userInfo)
        const identities = useSelector((state) => state.identities.identities)
console.log(user)
        // const [sortedList, setSortedList] = useState([])

        useEffect(() => {
            dispatch(getAllIdentities())

            
        }, []) 

        const list = <Menu> {identities.map((identity, i) => {
                        return <Menu.Item key={i}>
                            {identity.pact_name}
                            </Menu.Item>
                            })
                        }
                    </Menu>

        return(
             <div className="page">
                {/* <h1 className="welcome">Welcome, {user.name}!</h1> */}
                    <h1 className="header">Dashboard</h1>
                    <br/>
                    <Card>
                        <Dropdown overlay={list} trigger={['click']}>
                            <Button>
                            {/* <a className="ant-dropdown-link" onClick={e => e.preventDefault()}> */}
                            Join a Pact
                            {/* </a> */}
                            </Button>
                        </Dropdown>

                    {/* {sortedList.map(identity => {
                            return <IdentityList
                            pact_name={identity.pact_name}
                            description={identity.description}
                            key={identity.id}
                            identityId={identity.id}
                            />
                        })} */}
        
                    </Card>
                    <br/>
                    <br/>
                    <Row gutter={16}>
              
                    <Col span={12}>
                        <Card title="Most Recent Built Habits" >
                        
                            <Link to="/identities">Add an IDentity</Link>
                        </Card>
                    </Col>
                   
               
                    <Col span={12}>
                        <Card title="Most Recent Quit Habits" >
                            <Link to="/habits">Create a new Habit</Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        )

}










// class Dashboard extends Component {

//     componentDidMount(){
//         this.props.get_all_identities()
//         // this.props.get_user()
//     }


//     render(){

//         const { habits, identities, user } = this.props

//         // useEffect(() => {
//         //     const list = identities.sort(function(a,b){
//         //         if(a.pact_name < b.pact_name) {return -1;}
//         //         if(a.pact_name > b.pact_name) {return 1;}
//         //         return 0
//         //     })           
//         // }, []) 



//         return(
//             <div className="page">
//                 <h1>Dashboard</h1>
//                 <div className="card">
//                     Join a Pact:
//                 {identities.map(identity => {
//                         return <IdentityList
//                         pact_name={identity.pact_name}
//                         description={identity.description}
//                         key={identity.id}
//                         identityId={identity.id}
//                         />
//                     })}
//                 </div>
//                 <div className="spacing">
//                 <div className="card">
//                     <Link to="/identities">Add an IDentity</Link>
//                 </div>
//                 </div>
//                 <div className="card">
//                     <Link to="/habits">Create a new Habit</Link>
//                 </div>
//                 <div className="card">
//                     {/* {userId}={user.id} */}
//                     {/* <Link to={`/profile/${this.props.user.id}`}>My Profile</Link> */}
//                 </div>
//             </div>
//         )
//     }
// }



// const mapStateToProps = (state) => {
//     const { csrf_token, habits, identities, user } = state
//     return {
//         csrf_token: csrf_token,
//         habits: habits.habits,
//         habit: habits.habit,
//         identities: identities.identities,
//         identity: identities.identitiy,
//         user: user
//     }
//  }
    
// const mapDispatchToProps = (dispatch) => ({
//     get_all_habits: () => dispatch(getAllHabits()),
//     // get_user: () => dispatch(getUser()),
//     add_habit: (csrf_token, build, title, frequency_number, frequency) => dispatch(addHabit(csrf_token, build, title, frequency_number, frequency)),
//     get_all_identities: () => dispatch(getAllIdentities()),
//     add_identity: (csrf_token, pact_name, description) => dispatch(addIdentity(csrf_token, pact_name, description)),
//     join_identity: (userId, identityId) => dispatch(joinIdentity(userId, identityId))
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


