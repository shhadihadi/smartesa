import React, { useState } from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


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
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
    ],
  };

  const formats = [    'header',    'bold',    'italic',    'underline',    'strike',    'blockquote',    'list', 
     'bullet',    'link',    'image',    'size',    'color',    'background',    'font',    'align',  ];

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="edit">
            <h2>Create Articles</h2>

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
            
              <div className="createmetho">
                <div className="textoutputdisplay" style={{ marginTop: '-28px' }}>
                  <p>Cover</p>
                  <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                onChange={handleCoverChange}
                 />
                </div>
                <div>
             <label>Paragraph</label>
              
             <ReactQuill
                      value={desc}
                   onChange={setDesc}
                  modules={modules}
                   formats={formats}
                  />
              </div>
                
              </div>
              <div >

              <button>Save</button></div>
                <Link to="/events">Back</Link>  
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddArticles;


