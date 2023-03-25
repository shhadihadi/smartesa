import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import useFetch from "../../useFetch";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './smartTalk.scss'


const SmartEditVideo = () => {
   
    
    const { id }  = useParams();
    const { data:team, error, isPending } = useFetch('http://localhost:8000/team/' +(id));
 
   
    
    useEffect(() => {
      fetch(`http://localhost:8000/team/${id}`).then((res) => {
        return res.json();
      }).then((res) => {
        // idchange(res.id);
        nameChange(res.name);
        thumbnailChange(res.thumbnail);
        coverChange(res.cover);
        dateChange(res.date);
        workChange(res.work);
      }).catch((err) => {
        console.log(err.message);
      })
    }, [id]);

 const [aboutEdit, aboutChange] = useState('');
    // const[id,idchange]=useState("");
    const[name,nameChange]=useState();
    const[thumbnail, thumbnailChange]=useState();
    const[cover,coverChange]=useState();
    const[date,dateChange]=useState();
    const [work,workChange]=useState();

    const handleCoverChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            thumbnail(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        thumbnailChange(e.target.files[0]);
      };

    const handlesubmit=(e)=>{
      e.preventDefault();
     const aboutdata={name,thumbnail,cover,date,work};
      

      fetch(`http://localhost:8000/team/${id}`,{
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
                                    
     <label>Name</label>
     <input required value={name} onMouseDown={e=>nameChange(true)} onChange={e=>nameChange(e.target.value)}></input> 

     <label>Date</label>
     <input required value={date} onMouseDown={e=>dateChange(true)} onChange={e=>dateChange(e.target.value)}></input>
     <label>Cover</label>
     <input required value={cover} onMouseDown={e=>coverChange(true)} onChange={e=>coverChange(e.target.value)}></input>

     <div className="flexrowhadi">
                  <p>Thumbail</p>
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    onChange={handleCoverChange}
                  />
                </div>                       
      
       <button  type="submit">Save</button>
      <Link to="/smartTalk">Back</Link>                                                        
                                        
       </form>                          
                                  
           
            </div>
        </div>
        </div>
     
 
     );
}
 
export default SmartEditVideo;             
                                
                                  
                                      
                           
                                        
                                  
                                
                                  
                                       
                                 
                       

                        

                

