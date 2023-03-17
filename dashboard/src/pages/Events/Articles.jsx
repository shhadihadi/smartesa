

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import {ImageListItem, ImageList,ImageListItemBar ,ListSubheader} from'@mui/material';







const Articles = () => {
  const { error, isPending, data: blogs} = useFetch('http://localhost:8000/blogs')
  
 
  return (
  
       
      // <Grid container   spacing={3}>
        
      //   { error && <div>{ error }</div> }
      // { isPending && <div>Loading...</div> }
      //   {Blogs&&
      //      Blogs.map(val =>(
              
      //         <Grid item key={val.id} xs={12} md={6} lg={4}>
             
              
      //            <Paper>
      //          <div className="imgreight">
      //               <img src={val.cover} alt="Cover" />
      //             </div>
      //             <CardHeader 
      //     action={
      //       <IconButton >
      //         <DeleteOutlined />
      //         <Link to={`/aboutEdit/${val.id}`}>
      //     < EditOutlined />
      //      </Link>
      //       </IconButton>
      //     }
      //     title={val.title}
      //   //   subheader={val.Paragraph}
      //   />
      //     </Paper>
          
      //     </Grid>
         
            
      //     )) 
      
      //    } 
         
            
        
            
      //      </Grid>
               
      
      <ImageList sx={{ width: 1000, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Events </ListSubheader>
      </ImageListItem>
      {blogs &&
      blogs.map((item) => (
        //  <Link to={`/aboutEdit/${item.id}`}>
        <ImageListItem key={item.cover}> 
        
          <img
            src={`${item.cover}?w=248&fit=crop&auto=format`}
            srcSet={`${item.cover}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.title}
            actionIcon={
            
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                 <DeleteOutlined />
              <Link to={`/articleEdit/${item.id}`}>
          < EditOutlined />
           </Link>
              </IconButton>
          
           
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
   
  )
}

export default Articles
