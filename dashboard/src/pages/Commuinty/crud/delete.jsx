import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Createcom() {
  const [nb, setnb] = useState('');
  const [title, settitle] = useState('');
  const [paragraphs, setparagraphs] = useState('');
  const [communityimg, setCommunityimg] = useState([]);
  // const [paragraphs, setparagraphs] = useState('');
  
  

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
      title,
      nb,
      paragraphs,
      communityimg: communityimg,
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };

    fetch('http://localhost:8000/ourcommunity/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(intercards),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // do something with the response from server
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form fields
    setnb('');
    settitle('');
    setparagraphs('');
    setCommunityimg('');
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
     

     <ReactQuill
     value={paragraphs}
     onChange={setparagraphs}
     modules={modules}
     formats={formats}
   />

  return (
    <div>
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
                  <input
                    type="file"
                    multiple
                    name="myImage"
                    accept="image/png, image/gif, image/jpeg, image/jpeg0 "
                    onChange={handleUPUAD}
                  />
                </div>
                <div className="asoneRowHadi">
                <h3>Paragraph</h3>
                <textarea  cols="30" rows="10" placeholder="Message" 
                onChange={(e) =>setparagraphs(e.target.value)}
                
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
