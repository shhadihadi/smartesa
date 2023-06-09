

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'







const Programes = () => {
  const { error, isPending, data: internationaProgramHome} = useFetch('http://localhost:8000/internationaProgramHome')
  
 
  return (
  
        
      <Grid container   spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {internationaProgramHome&&
           internationaProgramHome.map(val =>(
              
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
                
               
                <h4 style={{paddingLeft:"20px"}} >{val.Paragraph} </h4>
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

export default Programes 
