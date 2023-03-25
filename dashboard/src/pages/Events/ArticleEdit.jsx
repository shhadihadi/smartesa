import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams,useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import './events.scss'

function ArticleEdit() {
  const { id } = useParams();
  const [coverFile, setCoverFile] = useState(null);
 
  const [title, setTitle] = useState("");
   
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [communityimg, setCommunityimg] = useState([]);
  const [precommunityimg, sepretCommunityimg] = useState([]);

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
        setDate(data.date);
        setDesc(data.desc);
        // setCover(data.cover);
        setCommunityimg(data.communityimg);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleCoverChange = (e) => {
    const files = Array.from(e.target.files);
    const images = [];
    setCommunityimg([null]);

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
        setCommunityimg([...precommunityimg, ...images]);
      };

      reader.readAsDataURL(file);
    });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    let coverPath = communityimg;
    if (coverFile) {
      coverPath = await saveFileToDirectory(coverFile, "cover");
    }

   

    const updatedOnline = {
      title,
      date,
      desc,
      communityimg: communityimg,
      
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
                  <p>Title Events</p>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
               <p>Date</p>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
               
                  <p>Paragraphs</p>
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
              
               
                  <p>Cover</p>
                  
                  <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                   
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
