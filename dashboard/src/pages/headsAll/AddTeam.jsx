import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
                {/* <textarea  cols="30" rows="10" placeholder="Message" 
                value={desc}
                onChange={(e) =>setdesc(e.target.value)}
                
                ></textarea> */}
                <ReactQuill
                      value={desc}
     onChange={setdesc}
     modules={modules}
     formats={formats}
   />

                </div>
                  </div>
                  </form>
          </div>
          </div>
          </div>
  )
}

export default AddTeam
