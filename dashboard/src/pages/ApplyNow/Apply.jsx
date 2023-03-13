import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './apply.scss'
import Table from '../../components/tableApply/tableApply'
import useFetch from '../../useFetch'
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'

const Apply = () => {
  const { error, isPending, data: ApplyNow } = useFetch('http://localhost:8000/ApplyNow')
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className='Apply'>
        <Grid container elevation={3}  spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {ApplyNow &&
            ApplyNow.map(val =>(
              
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
                
               
                <h4 >{val.Paragraph} </h4>
                <h4 >{val.Paragraph1} </h4>
                <h4 >{val.Paragraph2} </h4>
                <h4 >{val.Paragraph3} </h4>
              
          
            </Paper>
          </Grid>
          
         
            ))
        
            }  
           </Grid>
           </div>
          <div className='Apply1'>
          <Table />
        </div>
       
      </div>
    </div>
  )
}

export default  Apply
