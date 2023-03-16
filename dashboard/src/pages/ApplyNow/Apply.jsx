import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Back from "../../components/comon/Back"
import './apply.scss'
import Table from '../../components/tableApply/tableApply'
import useFetch from '../../useFetch'
import { Link } from 'react-router-dom';
import { Grid , Paper} from '@mui/material';

import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'

const Apply = () => {
  const { error, isPending, data: ApplyNowHome } = useFetch('http://localhost:8000/ApplyNowHome')
  const paragraphs = ApplyNowHome ? ApplyNowHome[0].Paragraphs : null;
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className='Apply'>
        <Grid container elevation={3}  spacing={5}>
          
          
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
      <div>
         <Grid item   key={paragraphs.id} xs={12} md={12} lg={12}> 
           <Paper>
        <Back 
          title= {ApplyNowHome[0].title}
          paragraphs={paragraphs} // pass the entire "Paragraphs" array as a prop
         
        
        />
          <CardHeader 
               
               action={
                 <IconButton >
                   <DeleteOutlined />
                   <Link to={`/aboutEdit/${paragraphs.id}`}>
               < EditOutlined />
                </Link>
                 </IconButton>
               }
            
            /> 
           
            </Paper>
          </Grid>   </div>
            )}
       
    
     
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
