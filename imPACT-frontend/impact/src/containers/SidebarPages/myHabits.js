import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from 'antd';
import { getMyHabits } from "../../actions/habit"

export default function MyHabits(){

    // const userId = useSelector((state) => state.user.userInfo.id)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getMyHabits());
        // setError("");
    }, []);

    const myHabits = useSelector((state) => state.habits.MyHabits)
    console.log(myHabits)

    return(
        <div className="page">
            <h1 className="header">My Habits</h1>
        {/* </div>
        <div> */}
            {/* <Row>
            {myHabits.map((habit) => (
                <Col span={8}  key={habit.id}>
                    <Link to={`/habits/${habit.id}`}>
                    <Card
                    hoverable
                    bordered={true}
                    style={{ width: 200 }}
                    >
                        <hr/>
                        <h5>{habit.title}</h5>
                    </Card>
                        <br/>
                    </Link>
                </Col>
            )
            )}
            </Row> */}
        </div>
    )
}