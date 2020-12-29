import React, { useState } from "react";
import Select from "react-select"


const freq = [
    {label: "Hourly"},
    {label: "Daily"},
    {label: "Weekly"},
    {label: "Monthly"},
    {label: "Annually"}
]

const HabitForm = (props) => {
    const [build, setBuild] = useState("")
    const [title, setTitle] = useState("")
    const [number, setNumber] = useState("")
    const [frequency, setFrequency] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        props.handleSubmit(build, title, number, frequency)
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
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Title"
            onChange={event => setTitle(event.target.value)}
            value={title}
        />
        <br/>
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Number"
            onChange={event => setNumber(event.target.value)}
            value={number}
        />
        <br/>
   
        <Select
            className="mr-sm-2"
            type="select"
            placeholder="Frequency"
            options={freq}
            onClick={event => setFrequency(event.target.options)}
            // value={frequency}
        />
        <br/>
        <br/>
        <input type="submit" />
    </form>
)



}

export default HabitForm
