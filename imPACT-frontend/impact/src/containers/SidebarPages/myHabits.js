import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from 'antd';
import { getMyHabits } from "../../actions/habit"

export default function MyHabits(){

    const userId = useSelector((state) => state.user.userInfo.id)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getMyHabits(userId));

        // setError("");
    }, []);

    const myHabits = useSelector((state) => state.habits.MyHabits)
    console.log(userId, myHabits)

    return(
        <div className="page">
            <h1 className="header">My Habits</h1>
        </div>
        // <div>
        //     <h1>My Habits</h1>
        //     {myHabits.map((habit) => (
        //         <Col span={8}>
        //             {/* <Link to={`/member/business/${membership.business.id}/classes`}> */}
        //             <Card
        //             key={habit.id}
        //             hoverable
        //             bordered={true}
        //             style={{ width: 200 }}
        //             // cover={<img alt="" src={membership.business.logo_path}/>}
        //             >
        //                 <hr/>
        //                 <h5>{habit.title}</h5>
        //                 {/* <p>Membership Level: {membership.level}</p> */}
        //             </Card>
        //                 <br/>
        //                 <br/>
        //             {/* </Link> */}
        //         </Col>
        //     )
        //     )}
        // </div>
    )
}