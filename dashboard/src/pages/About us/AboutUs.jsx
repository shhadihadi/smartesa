
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
<<<<<<< Updated upstream
     
    
       <div className='details'> 
       
       <div>
=======
        <div className="datatable">
            <div className="datatableTitle">
              Add Text to About Us
              <Link to="/addArticles" className="link">
                Add New
              </Link>
            </div>
           
     <div className='details'>
    
>>>>>>> Stashed changes
        
        
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

</div>
      
    
     </div>
    
   
  )
}

export default AboutUs
