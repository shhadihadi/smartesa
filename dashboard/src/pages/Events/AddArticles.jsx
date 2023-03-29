import React, { useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom';


function AddArticles() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [cover, setCover] = useState('');
  // const [communityimg, setCommunityimg] = useState([]);
 

  const handleCoverChange = (e) => {
    const files = Array.from(e.target.files);
    const images = [];  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        images.push(reader.result);
        setCover([...cover, ...images]);
      };
  
      reader.readAsDataURL(file);
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = {
      title,
      date,
      desc,
      cover,
      // communityimg: communityimg,
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
    setDate('');
    setDesc('');
    setCover('');
   
    
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
            <div>
                    <label>Title Events </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                 < div>
                    <label>Date Events </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                <div>
             <label>Paragraph</label>
              
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="createmetho">
                <div className="textoutputdisplay" style={{ marginTop: '-28px' }}>
                  <p>Cover</p>
                  <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                onChange={handleCoverChange}
                 />
                </div>
                
              </div>
              <button>Save</button>
                <Link to="/events">Back</Link>  
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArticles;


