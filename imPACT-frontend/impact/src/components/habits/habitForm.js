import React, { useState } from "react";
import { Card } from "antd"

const HabitForm = (props) => {
    const [build, setBuild] = useState("")
    const [title, setTitle] = useState("")
    const [frequency_number, setNumber] = useState("")
    const [frequency, setFrequency] = useState("")

    let freq = ["Hourly", "Daily", "Weekly", "Monthly", "Annually"]
    //     {label: "Hourly", value:"Hourly"},
    //     {label: "Daily", value: "Daily"},
    //     {label: "Weekly", value: "Weekly"},
    //     {label: "Monthly", value: "Monthly"},
    //     {label: "Annually", value: "Annually"}
    // ]

    const handleSubmit = event => {
        event.preventDefault()
        props.handleSubmit(build, title, frequency_number, frequency)
    }

    return (
        <Card className="loginCard" title="Add a New Habit">
            <form onSubmit={handleSubmit}>
                <label>Build &nbsp;</label>
                <input
                    type="radio"
                    label="Build"
                    checked={build === 'true'}
                    onChange={event => setBuild(event.target.value)}
                    value={true}
                />
                &nbsp;
                <label>Quit &nbsp;</label>
                <input
                    type="radio"
                    label="Quit"
                    checked={build === 'false'}
                    onChange={event => setBuild(event.target.value)}
                    value={false}
                />
                <br/>
                <br/>
                <div className="label"> Title: &nbsp;
                <input
                    className="mr-sm-2"
                    type="text"
                    placeholder="Code, Exercise, Meditate...  "
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                </div>
                <div className="label"> Title: &nbsp;
                <input
                    className="mr-sm-2"
                    type="text"
                    placeholder="Number"
                    onChange={event => setNumber(event.target.value)}
                    value={frequency_number}
                />
                </div>
                <div className="label"> time(s) per: &nbsp;
                <select
                    className="dropdown"
                    type="select"
                    placeholder="Frequency"
                    value={frequency}
                    onChange={event => setFrequency(event.target.value)}
                >
                    {freq.map(item => {
                        return <option>{item}</option>
                    })}
                </select>
                </div>
                <br/>
                <div className="loginButton">
                    <input value="Create Habit" type="submit" />
                </div>
            </form>
        </Card>
    )
}

export default HabitForm
