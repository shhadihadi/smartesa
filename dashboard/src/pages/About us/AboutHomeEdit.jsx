import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import useFetch from "../../useFetch";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './edit.scss'


const AboutHomeEdit = () => {
   
    
    const { id }  = useParams();
    const { data:AboutUsHome, error, isPending } = useFetch('http://localhost:8000/AboutUsHome/' +(id));
 
   
    
    useEffect(() => {
      fetch(`http://localhost:8000/AboutUsHome/${id}`).then((res) => {
        return res.json();
      }).then((res) => {
        // idchange(res.id);
        titlechange(res.title);
        paragraphchange(res.Paragraphs);
      }).catch((err) => {
        console.log(err.message);
      })
    }, [id]);

 const [aboutEdit, aboutChange] = useState('');
    // const[id,idchange]=useState("");
    const[title,titlechange]=useState();
    const[Paragraphs,paragraphchange]=useState("stdyfugihopo089t78");


   

    const handlesubmit=(e)=>{
      e.preventDefault();
     const aboutdata={title,Paragraphs};
      

      fetch(`http://localhost:8000/AboutUsHome/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(aboutdata)
      }).then((res)=>{
        alert('Saved successfully.')
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
      <textarea width="100%"  cols="30"
rows="8" // set the number of rows to 8
placeholder="Message"
value={Paragraphs}
onChange={(e) => paragraphchange(e.target.value)}
onKeyDown={handleKeyDown} 
></textarea>
       <button  type="submit">Save</button>
      <Link to="/">Back</Link>                                                        
                                        
       </form>                          
                                  
           
            </div>
        </div>
        </div>
     
 
     );
}
 
export default AboutHomeEdit;             
                                
                                  
                                      
                           
                                        
                                  
                                
                                  
                                       
                                 
                       

                        

                

