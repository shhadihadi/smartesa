import React, { useState } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import './createmetho.css';

function Createmetho() {
  const [courseName, setcourseName] = useState('');
  const [course, setcourse] = useState('');
  const [cover, setcover] = useState('');
  const [hoverCover, sethoverCover] = useState('');

  const handleCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setcover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleHoverCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      sethoverCover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const online = {
      courseName,
      course,
      cover: cover,
      hoverCover: hoverCover,
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/online/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(online)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // do something with the response from server
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form fields
    setcourseName('');
    setcourse('');
    setcover('');
    sethoverCover('');
  };

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="datatable">
            <div className="cretetile">Create methotology</div>

            <form onSubmit={handleSubmit}>
              <div className="group">
                <input
                  type="text"
                  value={courseName}
                  onChange={(e) => setcourseName(e.target.value)}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Name</label>
              </div>
              <div className="group">
                <textarea
                  value={course}
                  onChange={(e) => setcourse(e.target.value)}
                ></textarea>
              </div>
              <div className="createmetho">
                <div className="textoutputdisplay" style={{ marginTop: '-28px' }}>
                  <p>Cover</p>
                  <input type="file" accept="image/*" required onChange={handleCoverChange} />
                </div>
                <div className="textoutputdisplay" style={{ marginTop: '10px' }}>
                  <p>Hover</p>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleHoverCoverChange}
                  />
                </div>
              </div>
              <button type="submit" style={{marginTop:"20px",marginLeft:"40px"}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createmetho;


