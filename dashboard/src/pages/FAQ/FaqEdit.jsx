import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './faq.scss'

import useFetch from "../../useFetch";

const FaqEdit = () => {
   
    
    const { id }  = useParams();
    const { data:Faq, error, isPending } = useFetch('http://localhost:8000/faq/' +(id));
 
   
    
    useEffect(() => {
      fetch(`http://localhost:8000/faq/${id}`).then((res) => {
        return res.json();
      }).then((res) => {
        // idchange(res.id);
        titlechange(res.title);
        descchange(res.desc);
      }).catch((err) => {
        console.log(err.message);
      })
    }, [id]);

 const [dataEdit, aboutChange] = useState('');
    // const[id,idchange]=useState("");
    const[title,titlechange]=useState("");
    const[desc,descchange]=useState("");


   

    const handlesubmit=(e)=>{
      e.preventDefault();
     const faqdata={title,desc};
      

      fetch(`http://localhost:8000/faq/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(faqdata)
      }).then((res)=>{
        alert('Saved successfully.')
        Navigate('aboutus');
      }).catch((err)=>{
        console.log(err.message)
      })


    //     
    //     Navigate('/');
    //   }).catch((err)=>{
    //     console.log(err.message)
    //   })

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
      <textarea width="100%" value={desc} onChange={e=>descchange(e.target.value)}></textarea>
       <button  type="submit">Save</button>
      <Link to="/">Back</Link>                                                        
                                        
       </form>                          
                                  
           
            </div>
        </div>
        </div>
     
     );
}
 
export default  FaqEdit;
