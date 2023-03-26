import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import useFetch from '../../useFetch';
import { Box } from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from 'react';

import './apply.scss'
import { DeleteOutlined } from '@mui/icons-material';





const ApplyTable= () => {
    // const { error, isPending, data: subscribe } = useFetch('http://localhost:8000/subscribe')
    const [tableData, setTableData]=useState([])

    useEffect(() => {
        fetch("http://localhost:8000/subscribe")
          .then((data) => data.json())
          .then((data) => setTableData(data))
      }, [])
       console.log(tableData)
       
   
  const handledelete = (id) => {
    fetch(`http://localhost:8000/subscribe/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
      
    });
  };

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
          renderCell: (params) => {
            return (
              <div className="cellAction">
               
                <div
                  className="deleteButton"
                  onClick={() => handledelete(params.row.id)}
                >
               <DeleteOutlined />
                </div>
              </div>
            );
            },
              },
      ];


 return (
    
    
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
    
  );

        
          
}

export default ApplyTable