import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import useFetch from "../../useFetch";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './edit.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AboutEdit = () => {
   
    
    const { id }  = useParams();
    const { data:homeAbout, error, isPending } = useFetch('http://localhost:8000/homeAbout/' +(id));
 
   
    
    useEffect(() => {
      fetch(`http://localhost:8000/homeAbout/${id}`).then((res) => {
        return res.json();
      }).then((res) => {
        // idchange(res.id);
        titlechange(res.title);
        paragraphchange(res.Paragraphs);
      }).catch((err) => {
        console.log(err.message);
      })
    }, [id]);

      
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

 const [aboutEdit, aboutChange] = useState('');
    // const[id,idchange]=useState("");
    const[title,titlechange]=useState();
    const[Paragraphs,paragraphchange]=useState("stdyfugihopo089t78");



    const formats = [    'header',    'bold',    'italic',    'underline',    'strike',    'blockquote',    'list', 
    'bullet',    'link',    'image',    'size',    'color',    'background',    'font',    'align',  ];

    const handlesubmit=(e)=>{
      e.preventDefault();
     const aboutdata={title,Paragraphs};
      

      fetch(`http://localhost:8000/homeAbout/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(aboutdata)
      }).then((res)=>{
       
        Navigate('aboutus');
      }).catch((err)=>{
        console.log(err.message)
      })


    }

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
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
     
     
       <div className='edit'> 
       <h2>Edit</h2>
   
      <form className="container" onSubmit={handlesubmit}>

      <label>ID</label>
     <input value={id} disabled="disabled"></input>
                                    
     <label>Title</label>
     <input required value={title} onMouseDown={e=>titlechange(true)} onChange={e=>titlechange(e.target.value)}></input>                           

                               
       <label>Paragraph</label>
      {/* <textarea width="100%"  cols="30"
rows="8" // set the number of rows to 8
placeholder="Message"
value={}
onChange={(e) => paragraphchange(e.target.value)}

></textarea> */}
<ReactQuill
                    value={Paragraphs}
                    onChange={paragraphchange}
                    modules={modules}
                    formats={formats}onKeyDown={handleKeyDown} 
                  />
            <div className="asoneRowHadi">
       <button className="edit111"  type="submit">Save</button>
                                </div>                           
                                        
       </form>                          
         <Link to="/AboutUs">Back</Link>                          
           
            </div>
        </div>  
        </div>
     
 
     );
}
 
export default AboutEdit;             
                                
                                  
                                      
                           
                                        
                                  
                                
                                  
                                       
                                 
                       

                        

                

