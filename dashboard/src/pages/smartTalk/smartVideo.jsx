

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import {ImageListItem, ImageList,ImageListItemBar ,ListSubheader} from'@mui/material';







const SmartVideo = () => {
  const { error, isPending, data: team} = useFetch('http://localhost:8000/team')
  
 
  return (
  
      
               
        
      <ImageList sx={{ width: 1100, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Events</ListSubheader>
      </ImageListItem>
      {team &&
      team.map((item) => (
        //  <Link to={`/aboutEdit/${item.id}`}>
        <ImageListItem key={item.thumbnail}> 
        
          <img
            src={`${item.thumbnail}?w=248&fit=crop&auto=format`}
            srcSet={`${item.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.title}
            actionIcon={
            
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
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

export default SmartVideo
