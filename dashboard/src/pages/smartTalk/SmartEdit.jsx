import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import useFetch from "../../useFetch";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./smartTalk.scss";

const SmartEdit = () => {
  const { id } = useParams();
  const {
    data: SamartTalkHome,
    error,
    isPending,
  } = useFetch("http://localhost:8000/SamartTalkHome/" + id);

  useEffect(() => {
    fetch(`http://localhost:8000/SamartTalkHome/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // idchange(res.id);
        titlechange(res.title);
        paragraphchange(res.Paragraphs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const [aboutEdit, aboutChange] = useState("");
  // const[id,idchange]=useState("");
  const [title, titlechange] = useState();
  const [Paragraphs, paragraphchange] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const aboutdata = { title, Paragraphs };

    fetch(`http://localhost:8000/SamartTalkHome/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(aboutdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        Navigate("aboutus");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
        // handle the onKeyDown event to prevent adding new lines after the maximum number of lines is reached
        const handleKeyDown = (e) => {
          const maxLines = 8; // set the maximum number of lines
          const newLineCharCode = 13; // the char code for new line
      
          const lineCount = (e.target.value.match(/\n/g) || []).length + 1; // count the number of lines in the textarea
          if (lineCount >= maxLines && e.keyCode === newLineCharCode) {
            e.preventDefault(); // prevent adding a new line if the maximum number of lines has been reached
          }
        };
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />

        <div className="edit">
          <h2>Edit</h2>

          <form className="container" onSubmit={handlesubmit}>
            <label>ID</label>
            <input value={id} disabled="disabled"></input>

            <label>Title</label>
            <input
              required
              value={title}
              onMouseDown={(e) => titlechange(true)}
              onChange={(e) => titlechange(e.target.value)}
            ></input>

            <label>Paragraph</label>
            <textarea
              width="100%"
              value={Paragraphs}
              onChange={(e) => paragraphchange(e.target.value)}
              cols="30"
rows="8" // set the number of rows to 8
placeholder="Message"

onKeyDown={handleKeyDown} 
            ></textarea>
            <div className="textoutputdisplay">
            <button type="submit">Save</button></div>
            <Link to="/smartTalk">Back</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SmartEdit;
