import React from "react";
import "./footer.css";
import { useState } from "react";
import { Link } from "react-router-dom"
const Footer = () => {
  const [email, setemail] = useState("");
  const [erroreEmail, seterroreEmail] = useState("");

  const validateEmail = (email) => {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(email);

  } 
  function makeCall() {
    const phoneNumber = '+961 1 373 373';
    window.location.href = `tel:${phoneNumber}`;
  }
  const mapURL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6620.587516439213!2d35.525072!3d33.8923635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1738dcd7eb75%3A0xd684276ebcee3b26!2s289%20Rue%20Clemenceau%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1656364449134!5m2!1sen!2sus";

const handleEmailClick = () => {
  window.open(mapURL, "_blank");
};


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email)) {
      seterroreEmail("Please enter a valid email address.");
    } else {
      fetch(`http://localhost:8000/subscribe/`)
        .then((response) => response.json())
        .then((subscribers) => {
          if (subscribers.some((subscriber) => subscriber.email === email)) {
            seterroreEmail("This email is already registered.");
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
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/SmartESABooster", "_blank");
  };
  const handleinstaClick = () => {
    window.open("https://www.instagram.com/smart.esa/", "_blank");
  };
  const handleTwitterClick = () => {

    window.open("https://twitter.com/smart_esa", '_blank');
  }
  const handleESABClick = () => {
    window.open("https://www.esa.edu.lb/french/home", '_blank');
  }
  const handleBankClick = () => {
    window.open("https://www.bdl.gov.lb/", '_blank');
  }
  const handleLBFClick = () => {
    window.open("https://lb.ambafrance.org/", '_blank');
  }
  function sendEmail() {
    const email = 'smartesa@esa.edu.lb';
    window.location.href = `mailto:${email}`;
  }

  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>SUBSCRIBE</h1>
            <span className="spanfooterstyle">
              Would you like to learn more about the news of Smart ESA
            </span>
          </div>
          {/* <div className="eroormessagehadi"> */}
          <span className="eroormessagehadi">{erroreEmail}</span>
          {/* </div> */}

          <div className='right row'>
          
          <input
  type='email'
  placeholder='Enter email address'
  value={email}
  onChange={(e) => setemail(e.target.value)}
  onKeyDown={(e) => {
    // if (e.keyCode === 13) 
    if (e.key === 'Enter')
    {
      handleSubmit(e);
    }
  }}
/>
<i className='fa fa-paper-plane' onClick={handleSubmit}></i>

          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1 style={{ marginLeft: "10px" }}>SMART ESA</h1>
            <span style={{ marginLeft: "18px" }}>
              ONLINE EDUCATION & LEARNING
            </span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <a onClick={handleFacebookClick}>
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a onClick={handleinstaClick}>
              <i className="fab fa-instagram icon"></i>
            </a>
            <a onClick={handleTwitterClick}>
              <i className="fab fa-twitter icon"></i>
            </a>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul style={{marginTop:"-30px"}}>
            <li>
              <Link to='/'>Home</Link>
            </li>
          
            <li >
              {/* <Link to='/courses'>All Courses</Link> */}
                <Link  to='/PROGRAMS'>PROGRAMS</Link>
              
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/SmarTalk'>SmarTalk</Link>
            </li>
            <li>
              <Link to='/OurCommunity'>Community</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            </ul>
          </div>

      
          <div className='box'>
  <h3> MADE BY</h3>
  <img src='/images/made.png' alt='Made by'style={{marginTop:'-20px',cursor:"pointer"}} onClick={handleESABClick}></img>
  <h3 style={{marginTop:'10px'}}> SUPPORTED BY </h3>
  <img src='/images/s1.png' alt='Supported by' style={{paddingBottom:'10px',cursor:"pointer"}} onClick={handleBankClick}></img>
  <img src='/images/s2.png' alt='Supported by'  style={{marginTop:'-100px',paddingLeft:'5px',cursor:"pointer"}}  onClick={handleLBFClick}></img>
</div>
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li style={{cursor:"pointer"}} onClick={handleEmailClick}>
                <i className='fa fa-map' style={{cursor:"pointer"}}></i>
                289 rue Clemenceau, Beirut, Lebanon
              </li>
              <li onClick={makeCall} style={{cursor:"pointer"}}>
                <i className='fa fa-phone-alt'></i>
                +961 1 373 373
              </li>
              <li  onClick={sendEmail} style={{cursor:"pointer"}}>
                <i className='fa fa-paper-plane'></i>
                smartesa@esa.edu.lb

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
  );
};

export default Footer;
