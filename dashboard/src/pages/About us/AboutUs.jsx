
import './about.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import AboutHome from './AboutHome'

import React from 'react'







const AboutUs = () => {
  const { error, isPending, data: homeAbout } = useFetch('http://localhost:8000/homeAbout')
  
 
  return (
   
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
         <h2 >About Us</h2>
        <div className='details'> 
       <AboutHome />
       </div>
    
      
       
      
         <div className='details'> 
        
      <Grid container   spacing={5} >
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {homeAbout &&
            homeAbout.map(val =>(
              
              <Grid item key={val.id} xs={12} md={12} lg={12}>
           
               <Paper>
               <CardHeader 
               
          action={
            <IconButton >
             
              <Link to={`/aboutEdit/${val.id}`}>
          < EditOutlined />
           </Link>
            </IconButton>
          }
          title={val.title}
        //   subheader={val.Paragraph}
        />
                
               
                
                <h4>{val.Paragraphs?.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))} 
                        </h4>
              
              
          
            </Paper>
          </Grid>
          
         
            ))
        
            }  
           </Grid>

              
        </div> 


</div>

    
     </div>
   
     
   
  )
}

export default AboutUs
