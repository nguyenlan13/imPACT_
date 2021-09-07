import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { Card, Row, Col } from 'antd';
import { getIdentityHabits } from '../../actions/identity'


export default function IdentityHabits({match}){

    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getIdentityHabits());
        // setError("");
    }, []);

    // const identityId = match.params.identityId
    const identityHabits = useSelector((state) => state.identities.myIdentities)
    console.log(identityHabits)

    return(
        <div className="page">
            <h1 className="header">My Habits</h1>
            <div>
                <Row>
                    {identityHabits.map((habit) => (
                        <Col span={8} key={habit.id}>
                            {/* <Link to={`/identities/${identityId}/habits`}> */}
                            <Card
                            hoverable
                            bordered={true}
                            style={{ width: 200 }}
                            >
                            <h2>{habit.title}</h2>
                            <hr/>
                            <h5>{habit.build}</h5>
                            </Card>
                            <br/>
                            <br/>
                            {/* </Link> */}
                        </Col>
                    )
                    )}
                </Row>
            </div>
        </div>
    )
}