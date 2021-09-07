import React, { useState } from "react";
import { Card } from "antd"

const IdentityForm = (props) => {
    const [pact_name, setName] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = event => {
        event.preventDefault()

        props.handleSubmit(pact_name, description)
    }

    return (
        <Card className="loginCard" title="Add an IDentity">
        <form onSubmit={handleSubmit}>
            <div className="label"> Pact Name: &nbsp;
                <input
                    className="mr-sm-2"
                    type="text"
                    // placeholder="Pact Name"
                    onChange={event => setName(event.target.value)}
                    value={pact_name}
                />
            </div>
            <div className="label"> IDentity: &nbsp;
            <input
                className="mr-sm-2"
                type="text"
                // placeholder="Description"
                onChange={event => setDescription(event.target.value)}
                value={description}
            />
            </div>
            <br/>
                <div className="loginButton">
                    <input type="submit" />
                </div>
        </form>
        </Card>
    )
        
}

export default IdentityForm
