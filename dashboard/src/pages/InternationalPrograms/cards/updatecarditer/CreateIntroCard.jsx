
import React from "react";
import { Link, Navigate, useParams,useNavigate, useLocation } from "react-router-dom";
import Navbar from '../../../../components/navbar/Navbar';
import Sidebar from '../../../../components/sidebar/Sidebar';
import { useState, useEffect } from "react"
import './updatecard.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateIntroCard() {
  const [coursesName, setcoursesName] = useState(""); 
  const [cover, setcover] = useState(null);
  const [courTeacher, setcourTeacher] = useState([]);
  const [detailsimg, setdetailsimg] = useState([]);
    const [TARGET, setTARGET] = useState("");
  const [SECTOR, setSECTOR] = useState("");
  const [OBJECTIVE, setOBJECTIVE] = useState("");
  const [DURATION, setDURATION] = useState("");
  const [TYPE, setTYPE] = useState("");
  const [text, settext] = useState("");
  const [AboutALL, setAboutALL] = useState("");
  

  
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
     

  

  const handleCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setcover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleHoverCoverChange = (e) => {
    const files = Array.from(e.target.files);
    const images = [];  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        images.push(reader.result);
        setcourTeacher([...courTeacher, ...images]);
      };
  
      reader.readAsDataURL(file);
    });
  };
  const handleInfoImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = [];  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        images.push(reader.result);
        setdetailsimg([...detailsimg, ...images]);
        
      };
  
      reader.readAsDataURL(file);
    });
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const intercards = {
      coursesName,
      TARGET,SECTOR,OBJECTIVE,DURATION,TYPE,
      courTeacher: courTeacher,
      text,AboutALL,
      cover: cover,
      detailsimg:detailsimg,
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/coursesCard/', {
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
    setcoursesName('');
     setcover('');
      setcourTeacher('');
      setdetailsimg('');
       setTARGET('');
        setSECTOR('');
         setOBJECTIVE(''); 
         setDURATION(''); 
         setTYPE(''); 
         settext('');
         setAboutALL('');

  
  };



  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="formstyle">
            
          <form onSubmit={handleSubmit} >
              <div className="formallupdate">
                <div className="asoneRowHadi">
                  <h3>Cover Name</h3>
                  <input
                    type="text"
                    value={coursesName}
                    onChange={(e) => setcoursesName(e.target.value)}
                  />
                </div>
                <div className="asoneRowHadi">
                <h3>Cover Image</h3>
                <input
                    type="file"
                    // accept="image/*"
                    onChange={handleCoverChange}
                  />
                </div>
                <div className="asoneRowHadi">
                <h3>Target</h3>
                <input
                    type="text"
                    value={TARGET}
                    onChange={(e) => setTARGET(e.target.value)}
                  />
                  <button >submit</button>
                </div>
                <div className="asoneRowHadi">
                <h3>Sector</h3>
                <input
                    type="text"
                    value={SECTOR}
                    onChange={(e) => setSECTOR(e.target.value)}
                  />
                </div>
                <div className="asoneRowHadi">
                <h3>Type</h3>
                <input
                    type="text"
                    value={TYPE}
                    onChange={(e) => setTYPE(e.target.value)}
                  />
                </div>  
                <div className="asoneRowHadi">
                <h3>Objective</h3>
                <input
                    type="text"
                    value={OBJECTIVE}
                    onChange={(e) => setOBJECTIVE(e.target.value)}
                  />
                </div>
                <div className="asoneRowHadi">
                <h3>DURATION</h3>
                <input
                    type="text"
                    value={DURATION}
                    onChange={(e) => setDURATION(e.target.value)}
                  />
                </div>
                <div className="asoneRowHadi">
                <h3>Images</h3>
                <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpg, image/jpeg "
                
                onChange={handleHoverCoverChange}
                 />
                   <h3 style={{marginLeft:"70px"}}>Info</h3>
                <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg "
                
                onChange={handleInfoImageChange}
                 />
                
                </div>
                <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                {/* <textarea  cols="30" rows="10" placeholder="Message" 
                value={text}
                onChange={(e) =>settext(e.target.value)}
                
                ></textarea> */}
                               <ReactQuill
     value={text}
     onChange={settext}
     modules={modules}
     formats={formats}
   />
                </div>
                <div className="asoneRowHadi " style={{marginTop:"150px"}}>
                <h3 >Details</h3>
                {/* <textarea  cols="30" rows="10" placeholder="Message" 
                value={AboutALL}
                onChange={(e) =>setAboutALL(e.target.value)}
                
                ></textarea> */}
                 <ReactQuill
               value={AboutALL}
              onChange={setAboutALL}
               modules={modules}
     formats={formats}
   />
                </div>
                

              </div>
            
            </form>
          </div>
          </div>
          </div>
      
    </>
  )
}

export default CreateIntroCard
