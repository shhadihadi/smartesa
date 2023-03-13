import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import useFetch from "../../useFetch";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './edit.scss'


const AboutEdit = () => {
   
    
    const { id }  = useParams();
    const { data:AboutJs, error, isPending } = useFetch('http://localhost:8000/AboutJs/' +(id));
 
   
    
    useEffect(() => {
      fetch(`http://localhost:8000/AboutJs/${id}`).then((res) => {
        return res.json();
      }).then((res) => {
        // idchange(res.id);
        titlechange(res.title);
        paragraphchange(res.Paragraph);
      }).catch((err) => {
        console.log(err.message);
      })
    }, [id]);

 const [aboutEdit, aboutChange] = useState('');
    // const[id,idchange]=useState("");
    const[title,titlechange]=useState();
    const[Paragraph,paragraphchange]=useState("stdyfugihopo089t78");


   

    const handlesubmit=(e)=>{
      e.preventDefault();
     const aboutdata={title,Paragraph};
      

      fetch(`http://localhost:8000/AboutJs/${id}`,{
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
      <textarea width="100%" value={Paragraph} onChange={e=>paragraphchange(e.target.value)}></textarea>
       <button  type="submit">Save</button>
      <Link to="/">Back</Link>                                                        
                                        
       </form>                          
                                  
           
            </div>
        </div>
        </div>
     
 
     );
}
 
export default AboutEdit;             
                                
                                  
                                      
                           
                                        
                                  
                                
                                  
                                       
                                 
                       

                        

                

