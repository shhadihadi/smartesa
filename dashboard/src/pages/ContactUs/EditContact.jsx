
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import useFetch from "../../useFetch";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './contact.scss'


const EditContact = () => {
   
    
    const { id }  = useParams();
    const { data:contactHome, error, isPending } = useFetch('http://localhost:8000/contactHome/' +(id));
 
   
    
    useEffect(() => {
      fetch(`http://localhost:8000/contactHome/${id}`).then((res) => {
        return res.json();
      }).then((res) => {
        // idchange(res.id);
        titlechange(res.title);
        addresschange(res.address);
        phonechange(res.phone);
        emailchange(res.email);
        paragraphchange(res.Paragraphs);
      }).catch((err) => {
        console.log(err.message);
      })
    }, [id]);

 const [aboutEdit, aboutChange] = useState('');
    // const[id,idchange]=useState("");
    const[title,titlechange]=useState();
    const[address,addresschange]=useState();
    const[phone,phonechange]=useState();
    const[email,emailchange]=useState();
    const[Paragraphs,paragraphchange]=useState("stdyfugihopo089t78");


   

    const handlesubmit=(e)=>{
      e.preventDefault();
     const aboutdata={title,address,phone,email,Paragraphs};
      

      fetch(`http://localhost:8000/contactHome/${id}`,{
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

     <label>Address</label>
     <input required value={address} onMouseDown={e=>addresschange(true)} onChange={e=>addresschange(e.target.value)}></input>                          
     
     <label>phone</label>
     <input required value={phone} onMouseDown={e=>phonechange(true)} onChange={e=>phonechange(e.target.value)}></input>                          

<label>Email</label>
     <input required value={email} onMouseDown={e=>emailchange(true)} onChange={e=>emailchange(e.target.value)}></input>
                               
       <label>Paragraph</label>
      <textarea width="100%" value={Paragraphs} onChange={e=>paragraphchange(e.target.value)}></textarea>
       <button  type="submit">Save</button>
      <Link to="/contactHome">Back</Link>                                                        
                                        
       </form>                          
                                  
           
            </div>
        </div>
        </div>
     
 
     );
}
 
export default EditContact;             
                                
                                  
                                      
                           
                                        
                                  
                                
                                  
                                       
                                 
                       

                        

                

