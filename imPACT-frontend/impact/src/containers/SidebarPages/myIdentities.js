import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { Card, Row, Col } from 'antd';
import { getMyIdentities } from '../../actions/identity'


export default function MyPacts(){

    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getMyIdentities());
        // setError("");
    }, []);

    const myIdentities = useSelector((state) => state.identities.myIdentities)
    console.log(myIdentities)

    return(
        <div className="page">
            <h1 className="header">My Pacts</h1>
            <div>
                <Row>
                    {myIdentities.map((identity) => (
                        <Col span={8} key={identity.id}>
                            <Link to={`/identities/${identity.id}/habits`}>
                            <Card
                            hoverable
                            bordered={true}
                            style={{ width: 200 }}
                            >
                            <h2>{identity.pact_name}</h2>
                            <hr/>
                            <h5>{identity.description}</h5>
                                 {/* {identity.users.map((user) =>(
                                    user.username
                                ))} */}
                            </Card>
                            <br/>
                            <br/>
                            </Link>
                        </Col>
                    )
                    )}
                </Row>
            </div>
        </div>
    )
}