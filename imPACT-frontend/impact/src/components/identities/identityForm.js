import React, { useState } from "react";

const IdentityForm = (props) => {
    const [pact_name, setName] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = event => {
        event.preventDefault()

        props.handleSubmit(pact_name, description)
    }


return (
    <form onSubmit={handleSubmit}>

        Pact Name:
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Pact Name"
            onChange={event => setName(event.target.value)}
            value={pact_name}
        />
        <br/>
        IDentity:
        <input
            className="mr-sm-2"
            type="text"
            placeholder="Description"
            onChange={event => setDescription(event.target.value)}
            value={description}
        />
        <br/>
        <br/>
        <input type="submit" />
    </form>
)

}

export default IdentityForm
