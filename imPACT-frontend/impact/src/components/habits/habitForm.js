import React, { useState } from "react";

const HabitForm = (props) => {
 const [name, setName] = useState("")
 const handleSubmit = event => {
     event.preventDefault()

     props.handleSubmit(name)
 }
return (
    <form onSubmit={handleSubmit}>

    </form>
)



}

export default HabitForm
