import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useState } from 'react'

function AddTeam() {
  const [name, setname] = useState("");
  const [post, setpost] = useState("");
  const [desc, setdesc] = useState("");
  const [cover, setcover] = useState("");

  const handleCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setcover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const intercards = {
      name,
      post,desc,
      cover: cover,
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/testimonal/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(intercards)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // do something with the response from server
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form fields
    setname("")
    setpost("")
    setdesc("")
    setcover("")


  
  };


  return (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar />

          <div className="formstyle">
            
            <form  onSubmit={handleSubmit}>
                <div className="formallupdate">
                  <div className="asoneRowHadi">
                    <h3>NAME</h3>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="asoneRowHadi">
                  <h3>POST</h3>
                  <input
                      type="text"
                      value={post}
                      onChange={(e) => setpost(e.target.value)}
                    />
                    <button >submit</button>
                    
                  </div>
                  <div className="asoneRowHadi">
                  <h3>Cover Image</h3>
                  <input
                      type="file"
                      accept="image/png, image/gif, image/jpg, image/jpeg"
                      onChange={handleCoverChange}
                    />
                  </div>
                  
                  <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea  cols="30" rows="10" placeholder="Message" 
                value={desc}
                onChange={(e) =>setdesc(e.target.value)}
                
                ></textarea>
                </div>
                  </div>
                  </form>
          </div>
          </div>
          </div>
  )
}

export default AddTeam
