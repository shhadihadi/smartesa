
import './about.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'







const AboutUs = () => {
  const { error, isPending, data: homeAbout } = useFetch('http://localhost:8000/homeAbout')
  
 
  return (
   
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
     
    
       <div className='details'> 
       
       <div>
        
        
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
              
          
            </Paper>
          </Grid>
          
         
            ))
        
            }  
           </Grid>
               
        </div> 

</div>
      
      {/* <Container>
      <Grid container spacing={3}>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {AboutJs &&
            AboutJs.map(val =>(
          <Grid item xs={12} md={6} lg={4} key={val.id}>
            <AboutCard AboutJs={val}  />
          </Grid>
        ))}
      </Grid>
    </Container>
       */}
     </div>
     </div> 
     
   
  )
}

export default AboutUs
