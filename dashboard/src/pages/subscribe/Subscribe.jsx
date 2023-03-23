import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import useFetch from '../../useFetch';
import { Box } from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from 'react';
import SubAction from './SubAction';
import './sub.scss'

const columns = [
  { field: 'id', headerName: 'ID', width: 300 },

  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 300,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 300,
    renderCell: (params) => (
      <SubAction />
       ),
        },
];



const Subscribe= () => {
    // const { error, isPending, data: subscribe } = useFetch('http://localhost:8000/subscribe')
    const [tableData, setTableData]=useState([])

    useEffect(() => {
        fetch("http://localhost:8000/subscribe")
          .then((data) => data.json())
          .then((data) => setTableData(data))
      }, [])
       console.log(tableData)

 return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <h2>Subscribe</h2>
        <div className='details'>
    
    <Box m="20px">
  

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      
        rows={tableData}
        columns={columns}
       
        rowsPerPageOptions={[5]}
        checkboxSelection
     
      />
      
     
    </div> 
       
         </Box>
     </div>
    </div>
    </div>
  );

        
          
}

export default Subscribe