import React, { useState } from "react";

const HabitForm = (props) => {
    const [build, setBuild] = useState("")
    const [title, setTitle] = useState("")
    const handleSubmit = event => {
        event.preventDefault()

        props.handleSubmit(build, title)
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
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Title"
            onChange={event => setTitle(event.target.value)}
            value={title}
        />
        <br/>
        <input type="submit" />
    </form>
)



}

export default HabitForm
