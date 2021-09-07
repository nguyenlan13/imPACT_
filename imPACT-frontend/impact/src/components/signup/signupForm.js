import React, { useState } from "react";
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const SignupForm = ({onSubmit}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // send the inputs to the signup thing
    console.log(email, name, username, password);
    // setEmail("");
    // setName("");
    // setUsername("");
    // setPassword("");

    onSubmit(email, username, name, password)
  };
  return (
    <Card className="loginCard" title="SIGN UP">
    <form onSubmit={handleSubmit}>
      <div className="label"> Email: &nbsp;
        <input
          className="mr-sm-2"
          type="text"
          // placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="label"> Name: &nbsp;
        <input
          className="mr-sm-2"
          type="text"
          // placeholder="Name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="label"> Username: &nbsp;
        <input
          className="mr-sm-2"
          type="text"
          // placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="label"> Password: &nbsp;
        <input
          className="mr-sm-2"
          type="password"
          // placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <br/>
      <div className="loginButton">
      <input type="submit" />
      </div>
    </form> 
    <br/>
    <Link to="/login"> or Log In </Link>
    </Card>
  );
};
export default SignupForm;