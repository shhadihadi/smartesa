import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import useFetch from '../../useFetch';
import { Box } from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from 'react';
import SubAction from './SubAction';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },

  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 200,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 200,
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
        <div className='smartTalk'>
    
    <Box m="20px">
  

    <div style={{ height: 400, width: '70%' }}>
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