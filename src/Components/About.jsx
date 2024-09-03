import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "60px" ,marginBottom:'80px',fontSize:'20px',fontFamily:'serif'}}>
        <h1>Who We Are:</h1>
        <p>
        There’s nothing cookie-cutter about <b>Slice and Dice</b>. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don’t settle for anything less than food we’re proud to serve. And we don’t just clock in. Not when we can also become our best, make friends, and have fun while we’re at it. <b>We’re the pizza company that lives life unboxed.</b>

         We’re not for people who want to blend in: pushing boundaries is part of our heritage. We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.
         <hr/>
        {/* <p style={{align:"center"}}><b>“Happiness is eating pizza alone”</b></p> */}
        </p>
        <Row>
          <h1>Our Speciality:</h1>
          <Col md={6}>
            <p>
            Pizza Hut has a wide selection of specialty pizzas that are sure to please your taste buds. Their specialty pizzas include The Edge Pizza – The Works, The Edge Pizza – Pepperoni, and The Edge Pizza – Meaty.<hr/>

<b>The Edge Pizza</b>
Pizza Hut Specialty, The Edge pizza, is a perfect choice. They include all your favorite toppings and flavors, like pepperoni and cheese. Plus, they’re made with fresh dough and topped with a sauce that goes right to the edge of the crust, so you get more flavor in every bite.<hr/>

<b>Ultimate Cheese Lover’s Pizza</b>
The Ultimate Cheese Lover’s Pizza features double the cheese, creamy garlic Parmesan sauce, and toppings like pepperoni, Italian sausage, green peppers, red onions, and black olives on top of our classic hand-tossed crust.
            </p>
          </Col>
          <Col md={6}>
            <img src="/images/veggie_paradise.jpg" alt="logo.png"/>
            <hr/>
             <img src="/images/margherita.jpg" alt="logo.png" /> 
          </Col>
        </Row>
        <Row>
          <h1>Our Chief:</h1>
          <Row>
            <Col md={3}>
              <img src="client-1.jpg" alt="logo.png " style={{height:'300px',width:'300px'}}/>
             <h4> Patrick Muriungi</h4>
               <h6>CEO & Founder</h6>
            </Col>
            <Col md={3}>
            <img src="client-2.jpg" alt="logo.png " style={{height:'300px',width:'300px'}}/>
           <h4>ClaireBelle Zawadi</h4>
            <h6>Global Brand Manager</h6>
            </Col>
            <Col md={3}>
            <img src="client-3.jpg" alt="logo.png " style={{height:'300px',width:'300px'}}/>
            <h4>Joy Marete</h4>
            <h6>Finance Manager</h6>
            </Col>
            <Col md={3}>
            <img src="client-4.jpg" alt="logo.png " style={{height:'300px',width:'300px'}}/>
           <h4> Uhuru Kenyatta</h4>
           <h6>HR</h6>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default About;
