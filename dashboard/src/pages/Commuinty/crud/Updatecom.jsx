import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";

function Updatecom() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [communityimg, setCommunityimg] = useState([]);
  const [precommunityimg, sepretCommunityimg] = useState([]);

  // fetch the data for the card with the given id on component mount
  useEffect(() => {
    fetch(`http://localhost:8000/price/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPrice(data.price);
        setName(data.name);
        setDesc(data.desc);
        // sepretCommunityimg(data.communityimg);
        setCommunityimg(data.communityimg);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const hadi = (e) => {
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
  const handleUPUADsl = (e) => {
    const files = Array.from(e.target.files);
    const images = [];
    
    // Check if there are any new images
    if (files.length === 0) {
      return;
    }
  
    files.forEach((file) => {
      const reader = new FileReader();
      setCommunityimg.data([])
  
      reader.onload = () => {
        images.push(reader.result);
        setCommunityimg([...communityimg, ...images]);
      };
  
      reader.readAsDataURL(file);
    });
  };
;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCard = {
      name,
      price,
      desc,
      communityimg: communityimg,
    };

    // update the card with the given id on the server
    try {
      const response = await fetch(`http://localhost:8000/price/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCard),
      });

      if (!response.ok) {
        throw new Error("Failed to update card");
      }

      navigate(`/community`);
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
                  <h3>Communimty Name</h3>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="asoneRowHadi">
                  <h3>Cover Name</h3>
                  <input
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <button>submit</button>
                </div>
                <div className="asoneRowHadi">
                  <h3>Images</h3>
                <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                onChange={hadi}
                 />
                
                </div>
                <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea  cols="30" rows="10" placeholder="Message" 
                value={desc}
                onChange={(e) =>setDesc(e.target.value)}
                
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

export default Updatecom

