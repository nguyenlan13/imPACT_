import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from 'antd';
import { getMyHabits } from "../../actions/habit"

export default function MyHabits(){

    // const userId = useSelector((state) => state.user.id)
    const userId = 1
    const dispatch = useDispatch()
    const myHabits = useSelector((state) => state.habits.MyHabits)

    useEffect(() => {
        dispatch(getMyHabits(userId));

        // setError("");
    }, [userId]);

    return(
        // <div>
        //     <h1>My Habits</h1>
        // </div>
        <div>
            <h1>My Habits</h1>
            {myHabits.map((habit) => (
                <Col span={8}>
                    {/* <Link to={`/member/business/${membership.business.id}/classes`}> */}
                    <Card
                    key={habit.id}
                    hoverable
                    bordered={true}
                    style={{ width: 200 }}
                    // cover={<img alt="" src={membership.business.logo_path}/>}
                    >
                        <hr/>
                        <h5>{habit.title}</h5>
                        {/* <p>Membership Level: {membership.level}</p> */}
                    </Card>
                        <br/>
                        <br/>
                    {/* </Link> */}
                </Col>
            )
            )}
        </div>
    )
}