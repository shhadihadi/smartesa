import React from 'react'
import {Grid} from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './events.scss'


import { Link } from 'react-router-dom';




import Articles from'./Articles'


const Events = () => {
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="datatable">
            <div className="datatableTitle">
              Add New Articles
              <Link to="/addArticles" className="link">
                Add New
              </Link>
            </div>
           
       
        <div className='events1'>
          
            
      <Grid container   spacing={5}>
        
        {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {Blogs &&
            Blogs.map(val =>(
              
            <div>
              <div className="imgreight">
                    <img src={val.cover} alt="Cover" />
                  </div>
               <Articles />
               
            </div>
          
         
            )) */}
        
            {/* }   */}
            <Articles />
           </Grid>
              
         </div>
       
             </div>
       
       
      </div>
    </div>
  )
}

export default  Events
