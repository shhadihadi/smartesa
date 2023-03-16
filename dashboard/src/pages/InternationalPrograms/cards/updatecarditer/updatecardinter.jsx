import React from "react";
import { Link, Navigate, useParams,useNavigate, useLocation } from "react-router-dom";
import Navbar from '../../../../components/navbar/Navbar';
import Sidebar from '../../../../components/sidebar/Sidebar';
import { useState, useEffect } from "react"
import './updatecard.css'

function Updatecardinter() {
  const { id } = useParams();
  const [coursesName, setcoursesName] = useState("");
  const [cover, setcover] = useState(null);
  const [courTeacher, setcourTeacher] = useState(null);
  const [TARGET, setTARGET] = useState("");
  const [SECTOR, setSECTOR] = useState("");
  const [OBJECTIVE, setOBJECTIVE] = useState("");
  const [DURATION, setDURATION] = useState("");
  const [TYPE, setTYPE] = useState("");
  const [text, settext] = useState("");
  const [prevCover, setPrevCover] = useState("");
  const [prevcourTeacher, setPrevcourTeacher] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    const previousLocation = location.state?.from;
    if (previousLocation) {
      navigate(previousLocation);
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8000/coursesCard/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setcoursesName(data.coursesName);
        setcover(data.cover);
        setcourTeacher(data.courTeacher);
        setTARGET(data.TARGET);
        setSECTOR(data.SECTOR);
        setOBJECTIVE(data.OBJECTIVE);
        setDURATION(data.DURATION);
        setTYPE(data.TYPE);
        settext(data.text);
        
      })
    
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPrevCover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setcover(e.target.files[0]);
  };

  const handlecourseTeacher = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPrevcourTeacher(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setcourTeacher([e.target.files[0]]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedinterCard = {
      coursesName,
      TARGET,
      SECTOR,
      OBJECTIVE,
      DURATION,
      TYPE,
      courTeacher: [ prevcourTeacher],
      text: [text],
      cover: prevCover,
    };

    fetch(`http://localhost:8000/coursesCard/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedinterCard),
    })
      .then((res) => {
        handleGoBack();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="formstyle">
            
            <form onSubmit={handleSubmit}>
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
                onChange={handlecourseTeacher} />
                
                </div>
                <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea id="message" cols="30" rows="10" placeholder="Message" value={text}
                onChange={(e) => settext(e.text.value)}
                
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

export default Updatecardinter


