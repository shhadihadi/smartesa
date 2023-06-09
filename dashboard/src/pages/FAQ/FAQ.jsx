import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import './faq.scss'
import useFetch from '../../useFetch'
import { Grid , Paper} from '@mui/material';
import { Link } from 'react-router-dom';
import {DeleteOutlined, Edit, EditOutlined} from'@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import FaqCreate from './FaqCreate'


const FAQ = () => {
  const { error, isPending, data: faq } = useFetch('http://localhost:8000/faq')

  const handledelete = (id) => {
    fetch(`http://localhost:8000/faq/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
      
    });
  };

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">  
        <Navbar/>
        <h2>FAQ</h2>
        <div className="datatable">
            <div className="datatableTitle">
              Add New FAQ
              <Link to="/faqCreate" className="link">
                Add New
              </Link>
            </div>
        <div className='faq2'>
        
          
           
          
       
        <Grid container  spacing={3}>
        { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {faq &&
            faq.map(val =>(
             
              <Grid item key={val.id} xs={12} md={12} lg={12}>
                
               <Paper>
               <CardHeader 
          action={
            <IconButton >
           
              <Link to={`/faqEdit/${val.id}`}>
          < EditOutlined />
           </Link>
           <DeleteOutlined 
                          onClick={() => handledelete(val.id)}
                          />
            </IconButton>
          }
          title={val.title}
        
        />
              
                <h4 >{val.desc} </h4>
              
          
            </Paper>
          </Grid>
          
            ))
        
            }  
           </Grid> </div>
                  </div>
      </div>
    </div>
  )
}

export default  FAQ
