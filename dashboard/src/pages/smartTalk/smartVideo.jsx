


import React from 'react'

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import {ImageListItem, ImageList,ImageListItemBar ,ListSubheader} from'@mui/material';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Stack, Box } from "@mui/material";





const SmartVideo = () => {
  const { error, isPending, data: team} = useFetch('http://localhost:8000/team')
  console.log(team)

  const handledelete = (id) => {
    fetch(`http://localhost:8000/team/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
      
    });
  };
  
 
  return (
  <div className='smartTalk1'>
     
     <Grid container   spacing={3}>
        
          { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
          {team&&
             team.map(val =>(
                
                <Grid item key={val.id} xs={12} md={6} lg={4}>
               
                
                   <Paper>
                 
                    <CardHeader 
            action={
              <IconButton >
                <DeleteOutlined 
                          onClick={() => handledelete(val.id)}
                          />
                <Link to={`/smartEditVideo/${val.id}`}>
            < EditOutlined />
             </Link>
             
              </IconButton>
            }
            title={val.title}
           
          //   subheader={val.Paragraph}
          />
                <div className="imgreight">
                      <img src={val.cover} alt="Cover" />
                     <h5>{val.date}</h5>
                    </div>
            </Paper>
            
            </Grid>
           
              
            )) }
        
           </Grid>
        
    </div>
  
  )
}

export default SmartVideo
