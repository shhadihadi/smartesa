import React from 'react'
import {Grid} from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './events.scss'
// import useFetch from '../../useFetch';

import { Link } from 'react-router-dom';
// import { Grid , Paper} from '@mui/material';


// import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
// import IconButton from '@mui/material/IconButton'
// import CardHeader from '@mui/material/CardHeader'
import Articles from'./Articles'
import EventsHome from './EventsHome';


const Events = () => {
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>

      
           
       
        <div className='events'>
          <EventsHome />
          </div>

          <div className='events1'>  
      <Grid container   spacing={6} >
        
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
  
  )
}

export default  Events
