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
import ApplyTable from './ApplyTable'
const Apply = () => {
  const { error, isPending, data: homeApply } = useFetch('http://localhost:8000/homeApply')
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <h2>Apply Now</h2>
        <div className='Apply'>

        <Grid container elevation={3}  spacing={5}>
        
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {homeApply &&
            homeApply.map(val =>(
              
              <Grid item key={val.id} xs={12} md={12} lg={12}>
           
               <Paper>
               <CardHeader 
          action={
            <IconButton >
            
              <Link to={`/aboutEdit/${val.id}`}>
          < EditOutlined />
           </Link>
            </IconButton>
          }
          title={val.title}
        //   subheader={val.Paragraph}
        />
                
               
                <h4>{val.Paragraphs?.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))} 
                        </h4>
          
            </Paper>
          </Grid>
          
         
            ))
        
            }  
           </Grid>
           </div>
          <div className='Apply1'>
          <ApplyTable />
        </div>
       
      </div>
    </div>
  )
}

export default  Apply
