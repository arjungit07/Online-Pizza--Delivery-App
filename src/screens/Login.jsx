import React ,{useState,useEffect} from 'react'
import { Container, Form, Button ,Row,Col } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {loginUser} from '../action/userAction'


const Login = () => {
 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()

 
 // useEffect(() => {
  //   localStorage.setItem("currentUser", JSON.stringify(currentUser1));
  // }, []);



  useEffect(() => {
    if (localStorage.getItem('currentUser'))  {
      window.location.href='/'
    }
  },[])
  const loginHandler = () => {
    const user = {email,password};
    console.log(user)
    dispatch(loginUser(user))
   
}
  return (
    <>
    <Container>
      <hr />
      <Row>
        <Col md={6}>
    <Form style={{marginTop:'100px',backgroundColor:''}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email"
         placeholder="Enter email"
         value={email}
         onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  />
      </Form.Group>
     
      
      <Button variant="primary" 
      onClick={loginHandler}>
        Log in
      </Button>
    </Form>
    </Col>
    <Col md={6}>
      <img src="/images/logpizza.jpg" alt="logo" style={{marginLeft:'60px',height:'400px',width:'600px'}}/>
    </Col>
    </Row>
  


    </Container>
    </>
  )
}

export default Login