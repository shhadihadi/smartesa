import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams,useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import './events.scss'

function ArticleEdit() {
  const { id } = useParams();
  const [coverFile, setCoverFile] = useState(null);
 
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cover, setCover] = useState("");

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
    fetch(`http://localhost:8000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // setId(data.id);
        setTitle(data.title);
        setDesc(data.desc);
        setCover(data.cover);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleCoverChange = (e) => {
    setCover(e.target.files[0]);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    let coverPath = cover;
    if (coverFile) {
      coverPath = await saveFileToDirectory(coverFile, "cover");
    }

   

    const updatedOnline = {
      title,
      desc,
      cover: coverPath,
      
    };

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedOnline),
    })
      .then((res) => {
        handleGoBack();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const saveFileToDirectory = async (file, type) => {
    const imagePath = `images/courses/blogs/${file.name}`;
    const formData = new FormData();
    formData.append("file", file);

    await fetch(`http://localhost:8000/save-image?path=${imagePath}`, {
      method: "POST",
      body: formData
    });

    return imagePath;
  };

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="edit">
            <h2>Edit Articles</h2>
            <form onSubmit={handleSubmit}>
            
                  <p>Id</p>
                <input
                    type="text"
                    value={id}
                
                  />
                  <p>Course Name</p>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
               
               
                  <p>Text</p>
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
              
               
                  <p>Cover</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverChange}
                  />
                
               
                <button  type="submit">Save</button>
                <Link to="/events">Back</Link>  
           
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleEdit;
