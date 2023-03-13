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
           </Grid></div>
           
        <div className='commuinty'>
          <h3>+90 STARTUPS</h3>
          <h4>
          In four years, Smart ESA has accelerated +90 startups from different industries. Our startups have won some of the most prestigious awards in Lebanon and the Arab World:

           MIT Pan Arab Forum
           Gitex
           Consensys Blockchain
           Amadeus Travel Challenge
           Sprint Competition
          Euromena Awards
           Seedstars Fintech
 

            Discover some our entrepreneurs
          </h4>
          <button>Edit</button>
        </div>
        <div className='commuinty'>
        <h3>+70 EXPERTS</h3>
        <h4>
           Smart ESA builds on ESA's national and international network to source some of the best mentors and coaches to help startups grow and succeed. Our coaches are highly experienced and have helped large and small companies alike to grow in Lebanon and internationally.

            If you are interested in becoming a coach, contact us at 01 373 373
        </h4>
          <button>Edit</button>
        </div>
        <div className='commuinty'>
        <h3>15 PARTNERS</h3>
        <h4>
        Smart ESA relies on different strategic partnerships. The partners support the startups in different ways: financing, material, international market access, expertise, etc.
        </h4>
          <button>Edit</button>
        </div>
       
      </div>
    </div>
  )
}

export default  Commuinty
