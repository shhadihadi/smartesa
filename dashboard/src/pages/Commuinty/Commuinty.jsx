import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './commuinty.scss'
import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import Comunitycards from './comunitycards';

const Commuinty = () => {
  const { error, isPending, data: OURCOMMUNITYHome } = useFetch('http://localhost:8000/OURCOMMUNITYHome')

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className='commuinty'>
        <Grid container   spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {OURCOMMUNITYHome &&
           OURCOMMUNITYHome.map(val =>(
              
              <Grid item key={val.id} xs={12} md={12} lg={12}>
           
               <Paper>
               <CardHeader 
          action={
            <IconButton >
              {/* <DeleteOutlined /> */}
              <Link to={`/comunity/${val.id}`}>
          < EditOutlined />
           </Link>
            </IconButton>
          }
          title={val.title}
        //   subheader={val.Paragraph}
        />
                
               
              {/* <h4> */}
                <div dangerouslySetInnerHTML={{ __html: val.Paragraphs }}></div>
                        {/* </h4> */}
              
          
            </Paper>
          </Grid>
          
         
            ))
        
            }  
           </Grid></div>
           
           <div className="counityitems">
            
            <Comunitycards />
           

           </div>
           
      
       
      </div>
    </div>
  )
}

export default  Commuinty
