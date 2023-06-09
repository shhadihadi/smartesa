import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sidebar/Sidebar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Updatecardinter() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coursesName, setCoursesName] = useState("");
  const [cover, setCover] = useState(null);
  const [courTeacher, setCourTeacher] = useState([]);
  const [TARGET, setTARGET] = useState("");
  const [SECTOR, setSECTOR] = useState("");
  const [OBJECTIVE, setOBJECTIVE] = useState("");
  const [DURATION, setDURATION] = useState("");
  const [TYPE, setTYPE] = useState("");
  const [text, setText] = useState("");
  const [prevCover, setPrevCover] = useState("");
  const [prevCourTeacher, setPrevCourTeacher] = useState([]);
  const [AboutALL, setAboutALL] = useState("");
  const [detailsimg, setdetailsimg] = useState([]);
  const [predetailsimg, setpredetailsimg] = useState([]);

  // fetch the data for the card with the given id on component mount
  useEffect(() => {
    fetch(`http://localhost:8000/coursesCard/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoursesName(data.coursesName);
        setPrevCover(data.cover);
        setCover(data.cover);
        setCourTeacher(data.courTeacher);
        setdetailsimg(data.detailsimg);
        setAboutALL(data.AboutALL);
        setTARGET(data.TARGET);
        setSECTOR(data.SECTOR);
        setOBJECTIVE(data.OBJECTIVE);
        setDURATION(data.DURATION);
        setTYPE(data.TYPE);
        setText(data.text);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  // handle the changes to the cover image
  const handleCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPrevCover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setCover(e.target.files[0]);
  };

  // handle the changes to the course teacher images
  const handleHoverCoverChange = (e) => {
    const files = Array.from(e.target.files);
    const images = [];
    // setCommunityimg([null]);

    // Check if there are any new images
    if (files.length === 0) {
      return;
    }
    files.forEach((file) => {
      const reader = new FileReader();
      // setCommunityimg = null;
      // setCommunityimg([null])

      reader.onload = () => {
        images.push(reader.result);
        setCourTeacher([...prevCourTeacher, ...images]);
      };

      reader.readAsDataURL(file);
    });
  };
  const HANDELmoreInfoIMG = (e) => {
    const files = Array.from(e.target.files);
    const images = [];
    // setCommunityimg([null]);

    // Check if there are any new images
    if (files.length === 0) {
      return;
    }
    files.forEach((file) => {
      const reader = new FileReader();
      // setCommunityimg = null;
      // setCommunityimg([null])

      reader.onload = () => {
        images.push(reader.result);
        setdetailsimg([...predetailsimg, ...images]);
      };

      reader.readAsDataURL(file);
    });
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
  // handle the form submit event
  const handleSubmit = async (e) => {
    e.preventDefault();


    const updatedCard = {
      coursesName,
      TARGET,
      SECTOR,
      OBJECTIVE,
      DURATION,
      TYPE,
      text,
      cover: prevCover,
      AboutALL,
      detailsimg: detailsimg,

      courTeacher: courTeacher,
    };

    // update the card with the given id on the server
    try {
      const response = await fetch(`http://localhost:8000/coursesCard/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCard),
      });

      if (!response.ok) {
        throw new Error("Failed to update card");
      }

      navigate(`/international`);
    } catch (err) {
      console.error(err);
    }
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
                    onChange={(e) => setCoursesName(e.target.value)}
                  />
                </div>
                <div className="asoneRowHadi">
                  <h3>Cover Image</h3>
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/jpeg0 "
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
                  <button>submit</button>
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
                  <input
                    type="file"
                    multiple
                    name="myImage"
                    accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                    onChange={handleHoverCoverChange}
                  />

                  <h3 style={{ marginLeft: "70px" }}>Info</h3>
                  <input
                    type="file"
                    multiple
                    name="myImage"
                    accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                    onChange={HANDELmoreInfoIMG}
                  />
                </div>
                <div className="asoneRowHadi">
                  <h3>Paragraph</h3>
                  {/* <textarea id="message" cols="30" rows="10" placeholder="Message" value={text}
                onChange={(e) => setText(e.target.value)}
                
                ></textarea> */}
                  <ReactQuill
                    value={text}
                    onChange={setText}
                    modules={modules}
                    formats={formats}
                  />
                </div>
                <div style={{marginTop:"150px"}} className="asoneRowHadi" >
                  <h3>MoreInfo</h3>
                  {/* <textarea id="message" cols="30" rows="10" placeholder="Message" value={AboutALL}
                onChange={(e) => setAboutALL(e.target.value)}
                
                ></textarea>
                 */}
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
  );
}

export default Updatecardinter;
