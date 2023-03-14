import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './smartTalk.scss'
import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined,  EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'


const SmartTalk = () => {
  const { error, isPending, data: SamartTalkHome } = useFetch('http://localhost:8000/SamartTalkHome')
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className='smartTalk'>
        <Grid container   spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {SamartTalkHome &&
            SamartTalkHome.map(val =>(
              
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
        <div className='smartTalk1'>
        <button>Add Video</button>
        </div>
      </div>
    </div>
  )
}

export default  SmartTalk
