

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { CardContent, Grid , Paper} from '@mui/material';

import {CardGiftcard, DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import './events.scss'







const Articles = () => {
  const { error, isPending, data:Blogs} = useFetch('http://localhost:8000/Blogs')
  
 
  return (
  
        
      <Grid container   spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {Blogs&&
           Blogs.map(val =>(
            
              
              <Grid item key={val.id} xs={12} md={6} lg={4}
              
              >
          
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
               
               
                <h4 >{val.Paragraphs} </h4>
               
              <Link >Article</Link>
              <div className="imgreight">
                    <img src={val.cover} alt="Cover" />
                  </div>
               
          
            </Paper>
            
          </Grid>
          
         
            ))
        
            }  
           </Grid>
               
        
     
     
     
   
  )
}

export default Articles
