import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import { useState } from 'react';

function Createcom() {

  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [communityimg, setCommunityimg] = useState([]);

  const handleUPUAD = (e) => {
    const files = Array.from(e.target.files);
    const images = [];  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        images.push(reader.result);
        setCommunityimg([...communityimg, ...images]);
      };
  
      reader.readAsDataURL(file);
    });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    const intercards = {
      name,
      price,
      desc,
      communityimg: communityimg,
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/price/', {
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
    setPrice('');
    setName('');
     setDesc('');
      setCommunityimg('');
  

  
  };






  return (
    <div>
        <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="formstyle">
            
            <form onSubmit={handleSubmit} >
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
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                      <button >submit</button>
                  </div>
                  <div className="asoneRowHadi">
                <h3>Images</h3>
                <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                onChange={handleUPUAD}
                 />
                
                </div>
                <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea  cols="30" rows="10" placeholder="Message" 
                onChange={(e) =>setDesc(e.target.value)}
                
                ></textarea>
                </div>
                  </div>
                  </form>
        </div>
        </div>
        </div>

      
    </div>
  )
}

export default Createcom
