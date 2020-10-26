import React, { useState } from "react";

const HabitForm = (props) => {
    const [name, setName] = useState("")
    const handleSubmit = event => {
        event.preventDefault()

        props.handleSubmit(name)
 }

return (
    <form onSubmit={handleSubmit}>
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Name"
            onChange={event => setName(event.target.value)}
            value={name}
        />
        <br/>
        <input type="submit" />
    </form>
)



}

export default HabitForm
