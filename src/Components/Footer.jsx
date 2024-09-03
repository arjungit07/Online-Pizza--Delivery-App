import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-light" style={{marginTop:'60px'}}>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are a small pizza shop that is passionate about making delicious pizza. We use only the freshest ingredients and our pizzas are made to order. </p>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>Anytown, CA 12345</p>
            <p>(123) 456-7890</p>
            <p>info@mypizzashop.com</p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <ul className="list-inline">
                <span>
              <li><a href="https://www.facebook.com/mypizzashop" target="_blank">
              <BiLogoFacebookCircle style={{height:'25px',width:'25px',marginBottom:'10px'}}/></a></li>
              <li><a href="https://twitter.com/mypizzashop" target="_blank"><AiOutlineTwitter style={{height:'25px',width:'25px',marginBottom:'10px'}}/></a></li>
              <li><a href="https://www.instagram.com/mypizzashop" target="_blank"><AiOutlineInstagram style={{height:'25px',width:'25px'}}/></a></li>
              </span>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center text-light ">Order a delicious pizza on the go, anywhere, anytime. Slice And Dice is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes. *T&C Apply. <br />
Hurry up and place your order now! <br />

© 2023 Slice And Dice India. All rights reserved. License Number: 10017011004220</p>
      </div>
        </footer>
    </div>
  );
};

export default Footer;
