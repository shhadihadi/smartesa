import React, { useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom';


function CreateVideo() {
  const [thumbnail, setThumbnail] = useState('');
  const [date, setDate] = useState('');
  const [work, setWork] = useState('');
  const [cover, setCover] = useState('');
  const [name, setName] = useState('');

 
 

  const handleThumbnailChange = (e) => {
    const files = Array.from(e.target.files);
    const images = [];  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        images.push(reader.result);
        setThumbnail([...thumbnail, ...images]);
      };
  
      reader.readAsDataURL(file);
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const teams = {
      name,
      thumbnail,
      date,
      work,
      cover,
      // communityimg: communityimg,
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/team/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(teams)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // do something with the response from server
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form fields
    setName('');
    setDate('');
    setThumbnail('');
    setCover('');
    setWork('');
    
    
  };

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="edit">
            <h2>Create SmartTalk</h2>

            <form onSubmit={handleSubmit}>
            <div>
                    <label>Name SmartTalk </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label> Link Video</label>
                    <input
                      type="text"
                      value={cover}
                      onChange={(e) => setCover(e.target.value)}
                    />
                  </div>
                 < div>
                    <label>Date  </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                <div><div className="createmetho">
                <div className="textoutputdisplay" style={{ marginTop: '-28px' }}>
                  <p> Thumbnail</p>
                  <input type="file" 
                onChange={handleThumbnailChange}
                 />
                </div>
             <label>Work</label>
              
                <input
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
                ></input>
              </div>
              
                
              </div>
              <button>Save</button>
                <Link to="/smartTalk">Back</Link>  
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateVideo;


