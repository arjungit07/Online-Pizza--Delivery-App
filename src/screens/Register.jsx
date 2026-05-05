import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../action/userAction";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const dispatch = useDispatch();

  const registerHandler = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    const user = { name, password, email, confirmPass };
    dispatch(registerUser(user));
  };

  return (
    <Container>
      <Form>
        <h1>Sign Up</h1>
        <hr />

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={registerHandler}>
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
