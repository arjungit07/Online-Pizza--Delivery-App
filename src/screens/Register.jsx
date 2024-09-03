  import React,{useEffect, useState} from 'react'
  import {Container,Button,Form} from 'react-bootstrap' 
  import {useDispatch,useSelector} from 'react-redux'
  import { registerUser } from '../action/userAction'
  import { useNavigate } from "react-router-dom";
  // import Loader from '../Components/Loader'
  // import Success from '../Components/Success'
  // import Error from '../Components/Error'

  const Register = () => {
      const [name,setName] = useState('')
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [confirmPass,setConfirmPass] = useState('')

      // const registerState = useSelector(state => state.userRegisterReducer )

      // const {success} = registerState

    const dispatch = useDispatch()
 

        const registerHandler = () => {
          // Regular expression to validate email format
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
      
      <>
      <Container>
      <Form>
          <h1>Sign Up</h1>
          <hr />
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter name"
          value={name} 
          onChange={e => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
            placeholder="Enter email"
            value={email} 
            onChange={e => setEmail(e.target.value)} />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
          value={password} 
          onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmBasicPassword">
          <Form.Label> ConfirmPassword</Form.Label>
          <Form.Control type="text" placeholder=" Confirm Password"
          value={confirmPass} 
          onChange={e => setConfirmPass(e.target.value)} />
        </Form.Group>

        <Button variant="primary"
        onClick={registerHandler}>
          Sign Up
        </Button>
      </Form >
      </Container>
      </>
    )
  }

  export default Register