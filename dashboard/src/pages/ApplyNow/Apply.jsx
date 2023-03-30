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

          <div className='Apply1'>
          <ApplyTable />
        </div>
       
      </div>
    </div>
  )
}

export default  Apply
