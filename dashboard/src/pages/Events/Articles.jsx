

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
      window.location.reload();
    });
  };
 
  return (
    <ImageList sx={{ width: "100%", gap: 40, maxHeight: 500}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" background="red">Events </ListSubheader>
      </ImageListItem>
      {blogs &&
      blogs.map((item) => (
        <ImageListItem key={item.cover}> 
          <img
           src={`${item.cover}`}
           srcSet={`${item.cover}`}
            alt={item.title}
            loading="lazy"
          sx={{ width: "80%" }} // add this
          />
         <IconButton background=" #3f4580">
                  {item.date}
                </IconButton>
          <ImageListItemBar
            title={item.title}
            subtitle={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
               
                <DeleteOutlined onClick={() => handledelete(item.id)} />
                <Link to={`/articleEdit/${item.id}`}>
                  <EditOutlined />
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