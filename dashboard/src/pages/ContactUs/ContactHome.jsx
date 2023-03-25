


import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'


import React from 'react'







const ContactHome = () => {
  const { error, isPending, data: ContactHome } = useFetch('http://localhost:8000/ContactHome')
  
 
  return (
   
  
     
   
        
        
      <Grid container   spacing={5} >
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {ContactHome &&
            ContactHome.map(val =>(
              
              <Grid item key={val.id} xs={12} md={12} lg={12}>
           
               <Paper>
               <CardHeader 
               
          action={
            <IconButton >
             
              <Link to={`/editContact/${val.id}`}>
          < EditOutlined />
           </Link>
            </IconButton>
          }
          title={val.title}
        //   subheader={val.Paragraph}
        />
                
               
                <h4><span>Address:</span>{val.address}</h4>
                <h4><span>Phone:</span>{val.phone}</h4>
                <h4><span>Email:</span>{val.email}</h4>
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

export default ContactHome
