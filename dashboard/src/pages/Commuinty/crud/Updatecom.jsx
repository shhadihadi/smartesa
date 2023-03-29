import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Updatecom() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [nb, setnb] = useState("");
  const [title, settitle] = useState("");
  const [paragraphs, setparagraphs] = useState("");
  const [communityimg, setCommunityimg] = useState([]);
  const [precommunityimg, sepretCommunityimg] = useState([]);

  // fetch the data for the card with the given id on component mount
  useEffect(() => {
    fetch(`http://localhost:8000/ourcommunity/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setnb(data.nb);
        settitle(data.title);
        setparagraphs(data.paragraphs);
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

const Clearphotos = async (e) =>{
  setCommunityimg (precommunityimg);
}


  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedCard = {
      title,
      nb,
      paragraphs,
      communityimg: communityimg,
    };

    // update the card with the given id on the server
    try {
      const response = await fetch(`http://localhost:8000/ourcommunity/${id}`, {
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
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>
                <div className="asoneRowHadi">
                  <h3>Cover Name</h3>
                  <input
                    type="text"
                    value={nb}
                    onChange={(e) => setnb(e.target.value)}
                  />
                  <button>submit</button>
                </div>
                <div className="asoneRowHadi">
                  <h3>Images</h3>
                <input type="file" multiple name="myImage" accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                onChange={hadi}
                 />
                 <button style={{backgroundColor:"brown"}} onClick={Clearphotos}>clear</button>
                
                </div>
                <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                {/* <textarea  cols="30" rows="10" placeholder="Message" 
                value={paragraphs}
                onChange={(e) =>setparagraphs(e.target.value)}
                
                ></textarea> */}
                               <ReactQuill
                      value={paragraphs}
     onChange={setparagraphs}
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
  )
}

export default Updatecom

