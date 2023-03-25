import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
function UpdateMainPics() {


  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [coverIamge, setcoverIamge] = useState("");
  const [prevcoverIamge, setprevcoverIamge] = useState("initialState");


  useEffect(() => {
    fetch(`http://localhost:8000/backImages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setname(data.name);
        setcoverIamge(data.coverIamge);
    
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleCoverChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setprevcoverIamge(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setcoverIamge(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCard = {
      name,
    
      coverIamge: prevcoverIamge,
    
    };

    // update the card with the given id on the server
    try {
      const response = await fetch(`http://localhost:8000/backImages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCard),
      });

      if (!response.ok) {
        throw new Error("Failed to update card");
      }

      navigate(`/products`);
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
                      type="text" readOnly
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
              <div className="asoneRowHadi">
              <h3>Cover Image</h3>
                  <input
                      type="file"
                      accept="image/*"
                      onChange={handleCoverChange}
                    />
                </div>
                <div className="asoneRowHadi"><button style={{height:"40px"}} >submit</button></div>
                </div>
                </form>
                </div>
                </div>
  </div>
  
  )
}

export default UpdateMainPics
