import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from 'antd';
import { getMyIdentities } from '../../actions/identity'


export default function MyPacts(){

    const userId = useSelector((state) => state.user.userInfo.id)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getMyIdentities(userId));

        // setError("");
    }, []);

    const myIdentities = useSelector((state) => state.identities.myIdentities)
    console.log(userId)
    console.log(myIdentities)


    return(
        <div className="page">
            <h1 className="header">My Pacts</h1>
             <div>
             {myIdentities.map((identity) => (
                <Col span={8}>
                    {/* <Link to={`/member/business/${membership.business.id}/classes`}> */}
                    <Card
                    key={identity.id}
                    hoverable
                    bordered={true}
                    style={{ width: 200 }}
                    // cover={<img alt="" src={membership.business.logo_path}/>}
                    >
                        <hr/>
                        <h5>{identity.pact_name} - {identity.description}</h5>
                        {/* <p>Membership Level: {membership.level}</p> */}
                    </Card>
                        <br/>
                        <br/>
                    {/* </Link> */}
                </Col>
            )
            )}
        </div>

        </div>
    )
}