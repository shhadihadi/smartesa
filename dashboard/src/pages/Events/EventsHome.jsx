


import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'

import React from 'react'







const EventsHome = () => {
  const { error, isPending, data: EventsHome } = useFetch('http://localhost:8000/EventsHome')
  
 
  return (
   
  
     
   
        
        
      <Grid container   spacing={5} >
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {EventsHome &&
            EventsHome.map(val =>(
              
              <Grid item key={val.id} xs={12} md={12} lg={12}>
           
               <Paper>
               <CardHeader 
               
          action={
            <IconButton >
             
              <Link to={`/editEventHome/${val.id}`}>
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
               
     

      
     
    
     
   
  )
}

export default EventsHome
