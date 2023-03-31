import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
import "./updtametho.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";


function UpdateformMetho() {
  const { id } = useParams();
  const [coverFile, setCoverFile] = useState(null);
  const [hoverCoverFile, setHoverCoverFile] = useState(null);
  const [courseName, setCourseName] = useState("");
  const [course, setCourse] = useState("");
  const [prevCover, setPrevCover] = useState("");
  const [prevHoverCover, setPrevHoverCover] = useState("");
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
    fetch(`http://localhost:8000/online/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourseName(data.courseName);
        setCourse(data.course);
        setPrevCover(data.cover);
        setPrevHoverCover(data.hoverCover);
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
    setCoverFile(e.target.files[0]);
  };

  const handleHoverCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPrevHoverCover(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setHoverCoverFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedOnline = {
      courseName,
      course,
      cover: prevCover,
      hoverCover: prevHoverCover
    };

    fetch(`http://localhost:8000/online/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedOnline),
    })
      .then((res) => {
        // handleGoBack();
        navigate('methotology')
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
          <div className="maindivform">
            <form onSubmit={handleSubmit}>
              <div className="textoutputdisplay">
                <div className="flexrowhadi">
                  <p>Course Name</p>
                  <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </div>
                <div className="flexrowhadi">
                  <p>Course</p>
                  <textarea
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </div>
                <div className="flexrowhadi">
                  <p>Cover</p>
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    onChange={handleCoverChange}
                  />
                </div>
                <div className="flexrowhadi">
                  <p>Hover</p>
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    onChange={handleHoverCoverChange}
                  />
                </div>
                <div className="flexrowhadi">
                <button>submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateformMetho;
