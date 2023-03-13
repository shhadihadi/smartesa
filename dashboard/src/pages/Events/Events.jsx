import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './events.scss'
// import useFetch from '../../useFetch';
// import { Link } from 'react-router-dom';
// import { Grid , Paper} from '@mui/material';

// import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
// import IconButton from '@mui/material/IconButton'
// import CardHeader from '@mui/material/CardHeader'
import Articles from'./Articles'


const Events = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className='events'>
          <h2>EVENTS</h2>
          
        </div>
        <div className='events1'>
            
      {/* <Grid container   spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {AboutJs &&
            AboutJs.map(val =>(
              
              <Grid item key={val.id} xs={12} md={12} lg={12}>
           
               <Paper>
               <CardHeader 
          action={
            <IconButton >
              <DeleteOutlined />
              <Link to={`/aboutEdit/${val.id}`}>
          < EditOutlined />
           </Link>
            </IconButton>
          }
          title={val.title}
        //   subheader={val.Paragraph}
        />
                
               
                <h4 >{val.Paragraph} </h4>
              
          
            </Paper>
          </Grid>
          
         
            ))
        
            }  
           </Grid> */}
               <Articles />
         </div>
       
            
       
       
      </div>
    </div>
  )
}

export default  Events
