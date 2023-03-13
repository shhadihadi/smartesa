

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'







const Articles = () => {
  const { error, isPending, data: Articles} = useFetch('http://localhost:8000/Articles')
  
 
  return (
  
        
      <Grid container   spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {Articles&&
           Articles.map(val =>(
              
              <Grid item key={val.id} xs={12} md={6} lg={4}>
           
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
                {/* <h4 >{val.Paragraph1} </h4>
                <h4 >{val.Paragraph2} </h4>
                <h4 >{val.Paragraph3} </h4>
                <h4 >{val.Paragraph4} </h4> */}
              
          
            </Paper>
          </Grid>
          
         
            ))
        
            }  
           </Grid>
               
        
     
     
     
   
  )
}

export default Articles
