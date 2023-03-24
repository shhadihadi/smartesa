// import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditTeamProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [post, setpost] = useState("");
  const [desc, setdesc] = useState("");
  const [cover, setcover] = useState("");
  const [prevCover, setPrevCover] = useState("");




  useEffect(() => {
    fetch(`http://localhost:8000/testimonal/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setname(data.name);
        setpost(data.post);
        setdesc(data.desc);
        setcover(data.cover);
        setPrevCover(data.cover);
      
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCard = {
      name,
      post,
      desc,
      cover: prevCover,
    
    };

    // update the card with the given id on the server
    try {
      const response = await fetch(`http://localhost:8000/testimonal/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCard),
      });

      if (!response.ok) {
        throw new Error("Failed to update card");
      }

      navigate(`/allinnone`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar />

          <div className="formstyle">
            
            <form onSubmit={handleSubmit} >
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
                      accept="image/*"
                      onChange={handleCoverChange}
                    />
                  </div>
                  
                  <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea  cols="30" rows="10" placeholder="Message" 
                value={desc}
                onChange={(e) =>setdesc(e.target.value)}
                
                ></textarea>
                </div>
                  </div>
                  </form>
          </div>
          </div>
          </div>
  )
}

export default EditTeamProfile
