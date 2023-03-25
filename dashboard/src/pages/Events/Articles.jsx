

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'

import CardHeader from '@mui/material/CardHeader'
import {ImageListItem, ImageList,ImageListItemBar ,ListSubheader} from'@mui/material';
import { red } from "@mui/material/colors";







const Articles = () => {
  const { error, isPending, data: blogs} = useFetch('http://localhost:8000/blogs')

  const handledelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
      
    });
  };
  
 
  return (
  
       
      
               
      
      <ImageList sx={{ width: 1000, height: 500}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" background="red">Events </ListSubheader>
      </ImageListItem>
      {blogs &&
      blogs.map((item) => (
        //  <Link to={`/aboutEdit/${item.id}`}>
        
        <ImageListItem key={item.cover}> 
         {/* <IconButton>{item.date}</IconButton> */}
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
                <IconButton
                background=" #3f4580">

                  {item.date}
                </IconButton>
                <DeleteOutlined 
                          onClick={() => handledelete(item.id)}
                          />
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
