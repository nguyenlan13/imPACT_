import React, { useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom"

const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    // send the inputs to the login thing
    console.log(email, password);
    // setEmail();
    // setPassword();

    onSubmit(email, password)
  };
  return (
    <Card className="loginCard" title="LOG IN">
      <form onSubmit={handleSubmit}>
        <div className="label"> Email: &nbsp;
          <input
            label="Email"
            className="mr-sm-2"
            type="email"
            // placeholder="Email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="label"> Password: &nbsp;
          <input
            label='Password'
            className="mr-sm-2"
            type="password"
            // placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <br/>
          <div className="loginButton">
            <input type="submit" /> 
          </div>
      </form> 
      <br/>
      <Link to="/signup"> or Create and Account </Link>
    </Card>
  );
};

export default LoginForm;