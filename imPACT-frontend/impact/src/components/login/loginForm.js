import React, { useState } from "react";
import { Form, Input, Button, Alert, Spin, Row } from "antd";



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
    // <Row type='flex' justify='center' align='middle'>
    //   <Form 
    //     onSubmit={handleSubmit}
    //     style={{
    //       width: "350px",
    //       marginTop: "10px",
    //     }}
    //   >
    //     <Form.Item
    //       label="Email"
    //     >
    //       <Input
    //         label="Email"
    //         className="mr-sm-2"
    //         type="email"
    //         placeholder="Email"
    //         onChange={event => setEmail(event.target.value)}
    //         value={email}
    //       />
    //     </Form.Item>
    //     <Form.Item
    //       label="Password"
    //     >
    //       <Input
    //         label='Password'
    //         className="mr-sm-2"
    //         type="password"
    //         placeholder="Password"
    //         onChange={event => setPassword(event.target.value)}
    //         value={password}
    //       />
    //     </Form.Item>
    
    //     <Form.Item
    //     style={{ textAlign: "center" }}
    //     >
    //       <Button htmlType="submit" style={{ width: "40%" }} > Submit</Button>
    //     </Form.Item>
    //   </Form> 
    // </Row>

      <form 
        onSubmit={handleSubmit}
        // style={{
        //   width: "350px",
        //   marginTop: "10px",
        // }}
      >
        {/* <Form.Item
          label="Email"
        > */}
          <input
            label="Email"
            className="mr-sm-2"
            type="email"
            placeholder="Email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <br/>
        {/* </Form.Item>
        <Form.Item */}
          {/* label="Password"
        > */}
          <input
            label='Password'
            className="mr-sm-2"
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        {/* </Form.Item>
    
        <Form.Item
        style={{ textAlign: "center" }}
        > */}
        <br/>
        <br/>
          <input type="submit" /> 
        {/* </Form.Item> */}
      </form> 
    // </Row>
  );
};

export default LoginForm;