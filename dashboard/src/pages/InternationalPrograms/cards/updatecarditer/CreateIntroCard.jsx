import React from "react";
import { Link, Navigate, useParams,useNavigate, useLocation } from "react-router-dom";
import Navbar from '../../../../components/navbar/Navbar';
import Sidebar from '../../../../components/sidebar/Sidebar';
import { useState, useEffect } from "react"
import './updatecard.css'

function CreateIntroCard() {
  const [coursesName, setcoursesName] = useState(""); 
  const [cover, setcover] = useState(null);
  const [courTeacher, setcourTeacher] = useState(null);
  const [TARGET, setTARGET] = useState("");
  const [SECTOR, setSECTOR] = useState("");
  const [OBJECTIVE, setOBJECTIVE] = useState("");
  const [DURATION, setDURATION] = useState("");
  const [TYPE, setTYPE] = useState("");
  const [text, settext] = useState([]);

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
      setcourTeacher(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const intercards = {
      coursesName,
      TARGET,SECTOR,OBJECTIVE,DURATION,TYPE,
      courTeacher: [courTeacher],
      text: [text],
      cover: cover,
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
    // setcoursesName('');
    //  setcover('');
    //   setcourTeacher('');
    //    setTARGET('');
    //     setSECTOR('');
    //      setOBJECTIVE(''); 
    //      setDURATION(''); 
    //      setTYPE(''); 
    //      settext('');

  
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
                <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                onChange={handleHoverCoverChange}
                 />
                
                </div>
                <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea  cols="30" rows="10" placeholder="Message" 
                onChange={(e) =>settext(e.target.value)}
                
                ></textarea>
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