import React, { useState } from "react";

const IdentityForm = (props) => {
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
            placeholder="name"
            onChange={event => setName(event.target.value)}
            value={name}
            />
            <br/>
        <input type="submit" />
    </form>
)



}

export default IdentityForm
