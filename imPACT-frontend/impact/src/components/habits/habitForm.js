import React, { useState } from "react";
import Select from "react-select"




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
  
        <form onSubmit={handleSubmit}>
            <label>Build</label>
            <input

                type="radio"
                label="Build"
                checked={build === "Build"}
                onChange={event => setBuild(event.target.value)}
                value="Build"
            />
            <label>Quit</label>
            <input
        
                type="radio"
                label="Quit"
                checked={build === "Quit"}
                onChange={event => setBuild(event.target.value)}
                value="Quit"
            />
            <br/>
            <br/>
            <label>Title:</label>
            <input
                className="mr-sm-2"
                type="text"
                placeholder="Code, Exercise, Meditate...  "
                onChange={event => setTitle(event.target.value)}
                value={title}
            />
            <br/>
            <label> Frequency:</label>
            <input
                className="mr-sm-2"
                type="text"
                placeholder="Number"
                onChange={event => setNumber(event.target.value)}
                value={frequency_number}
            />
            time(s) per
    
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
            
          

            <br/>
            <br/>
            <input value="Create Habit" type="submit" />
        </form>
    )
}

export default HabitForm
