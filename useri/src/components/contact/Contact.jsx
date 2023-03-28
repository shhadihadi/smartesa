import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import { useState } from "react";
import useFetch from "../../components/useFetch";
import Faq from "./Faq";

const Contact = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setmessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const contact = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };
  
    fetch(`http://localhost:8000/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    })
      .then(() => {
        setfirstName("");
        setlastName("");
        setemail("");
        setsubject("");
        setmessage("");
        e.target.reset(); 
        // Success handling code here
      })
      .catch((error) => {
        console.error(error);
        // Error handling code here
      });
  };
  const { error, isPending, data: ContactHome } = useFetch('http://localhost:8000/ContactHome');

  // extract the "Paragraphs" array from the first object in the "ContactHome" array
  const paragraphs = ContactHome ? ContactHome[0].Paragraphs : null;

  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6620.587516439213!2d35.525072!3d33.8923635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1738dcd7eb75%3A0xd684276ebcee3b26!2s289%20Rue%20Clemenceau%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1656364449134!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
        <Back 
          title= {ContactHome[0].title}
          paragraphs={paragraphs} // pass the entire "Paragraphs" array as a prop
        />
      )}
      <section>
      {<Faq /> }
      
      </section>
      {ContactHome && ContactHome.length > 0 && (
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2C'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>{ContactHome[0].address}</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> {ContactHome[0].email}</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> {ContactHome[0].phone}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexCt'>
                <input type='text' placeholder='First Name' value={firstName}
                  onChange={(e) => setfirstName(e.target.value)} required/>
                <input type='text' placeholder='Last Name' 
                   value={lastName}
                   onChange={(e) => setlastName(e.target.value)}
                   required />               
              </div>
              <input type='email' placeholder='Email' 
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              />
              <input type='text' placeholder='Subject' 
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                required
              />
              <textarea cols='30' rows='10' placeholder='Create a message here...'
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              required>    
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
      )}
    </>
  )
}

export default Contact
