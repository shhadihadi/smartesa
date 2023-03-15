import React, { useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom';


function AddArticles() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [cover, setcover] = useState('');
 

  const handleCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setcover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = {
      title,
      desc,
      cover: cover,
      
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogs)
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
    setcover('');
    
  };

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="edit">
            <div className="cretetile">Create Articles</div>

            <form onSubmit={handleSubmit}>
              <label>Title</label>

                <inputs
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                
                
             
              
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              <label>Paragraph</label>
              <div className="createmetho">
                <div className="textoutputdisplay" style={{ marginTop: '-28px' }}>
                  <p>Cover</p>
                  <input type="file" accept="image/*" required onChange={handleCoverChange} />
                </div>
                
              </div>
              <button  type="submit">Save</button>
                <Link to="/events">Back</Link>  
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArticles;


