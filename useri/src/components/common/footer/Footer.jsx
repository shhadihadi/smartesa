import React from "react"
import "./footer.css"
import { useState } from "react";
const Footer = () => {
  const [email, setemail] = useState('');
  const [erroreEmail, seterroreEmail] = useState('');

  const validateEmail = (email) => {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(email);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      seterroreEmail('Please enter a valid email address.');
    } else {
      fetch(`http://localhost:8000/subscribe/`)
        .then(response => response.json())
        .then(subscribers => {
          if (subscribers.some(subscriber => subscriber.email === email)) {
            seterroreEmail('This email is already registered.');
          } else {
            const subscribe = { email };
  
            fetch(`http://localhost:8000/subscribe/`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(subscribe),
            })
              .then(() => {
                setemail("");
                seterroreEmail(""); // Reset error message
                e.target.reset(); 
                // Success handling code here
              })
              .catch((error) => {
                console.error(error);
                // Error handling code here
              });
          }
        })
        .catch((error) => {
          console.error(error);
          // Error handling code here
        });
    }
  };
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>SUBSCRIBE</h1>
            <span>Would you like to learn more about the news of Smart ESA</span>
          </div>
          <span style={{marginTop:'90px',marginLeft:"100px",marginRight:'-400px',color:'#FFf',fontSize:"14px",letterSpacing:'1px'}}>{erroreEmail}</span>
          <div className='right row'>
          
          <input
  type='email'
  placeholder='Enter email address'
  value={email}
  onChange={(e) => setemail(e.target.value)}
/>
<i className='fa fa-paper-plane' onClick={handleSubmit}></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding' >
          <div className='box logo'>
            <h1 style={{marginLeft:'10px'}}>SMART ESA</h1>
            <span style={{marginLeft:'18px'}}>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <a href="https://www.facebook.com/SmartESABooster"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://twitter.com/smart_esa"><i className='fab fa-youtube icon'></i></a>
            <a href="https://www.instagram.com/smart.esa/"><i className='fab fa-instagram icon'></i></a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
      
          <div className='box'>
  <h3> MADE BY</h3>
  <img src='/images/made.png' alt='Made by'style={{marginTop:'-20px'}}></img>
  <h3 style={{marginTop:'10px'}}> SUPPORTED BY </h3>
  <img src='/images/s1.png' alt='Supported by' style={{paddingBottom:'10px'}}></img>
  <img src='/images/s2.png' alt='Supported by'  style={{marginTop:'-100px',paddingLeft:'5px'}} ></img>
</div>
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                289 rue Clemenceau, Beirut, Lebanon
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +961 76 837 264
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      </div> */}
    </>
  )
}

export default Footer
