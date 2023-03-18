import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

function ComunityById() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [Paragraphs, setParagraphs] = useState("");

    // fetch the data for the card with the given id on component mount
  useEffect(() => {
    fetch(`http://localhost:8000/OURCOMMUNITYHome/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setParagraphs(data.Paragraphs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);


    // handle the form submit event
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const updatedCard = {
        title,Paragraphs
      };
  
      // update the card with the given id on the server
      try {
        const response = await fetch(`http://localhost:8000/OURCOMMUNITYHome/${id}`, {
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
                  value={title}
                  readOnly
                  // onChange={(e) => setCoursesName(e.target.value)}
                />
                <button >submit</button>
              </div>
              <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea id="message" cols="30" rows="10" placeholder="Message"
                 value={Paragraphs}
                onChange={(e) => setParagraphs(e.target.value)}
                
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

export default ComunityById