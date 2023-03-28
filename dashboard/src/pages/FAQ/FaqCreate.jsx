import React, { useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import { Link } from 'react-router-dom';


function FaqCreate() {
  const [title, setTitle] = useState('');
  
  const [desc, setDesc] = useState('');


 

  const handleSubmit = (e) => {
    e.preventDefault();
    const faqs = {
      title,
     desc,
     
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/faq/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(faqs)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // do something with the response from server
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form fields
    setTitle('');
    setDesc('');
 
    
  };

  return (
    <>
     <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/> 
          <div className="edit">
            <div className="cretetile">Create FAQ</div>

            <form onSubmit={handleSubmit}>
            <div>
                    <label>Title Events </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                
                <div>
             <label>Paragraph</label>
              
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              
                
            
              <button>Save</button>
                 
            </form>
            <Link to="/faq">Back</Link> 
          </div>
       </div> </div>
    </>
  );
}

export default FaqCreate;


