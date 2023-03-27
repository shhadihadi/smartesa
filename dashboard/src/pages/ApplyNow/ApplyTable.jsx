import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import useFetch from '../../useFetch';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import './apply.scss'
import { DeleteOutlined } from '@mui/icons-material';





const ApplyTable= () => {
    // const { error, isPending, data: subscribe } = useFetch('http://localhost:8000/subscribe')
    const [tableData, setTableData]=useState([])

    useEffect(() => {
        fetch("http://localhost:8000/Apply")
          .then((data) => data.json())
          .then((data) => setTableData(data))
      }, [])
       console.log(tableData)
       
   
  const handledelete = (id) => {
    fetch(`http://localhost:8000/Apply/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
      
    });
  };

      const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
      
        {
          field: 'FN',
          headerName: 'First Name',
          type: 'text',
          width: 100,
        },
        {
          field: 'LN',
          headerName: 'Last Name',
          type: 'text',
          width: 100,
        },
        {
          field: 'Mobile',
          headerName: 'Mobile',
          type: 'text',
          width: 100,
        },
        {
          field: 'ProjectCOMname',
          headerName: 'Project Name',
          type: 'text',
          width: 100,
        },
        {
          field: 'Email',
          headerName: 'Email',
          type: 'email',
          width: 150,
        },
        {
          field: 'CustomWebsite',
          headerName: 'Customer Website',
          type: 'text',
          width: 150,
        },
        
        {
          field: 'actions',
          headerName: 'Actions',
          type: 'actions',
          width: 100,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                   <Link to={`/applyById/${params.row.id}`}style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
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
        
       
     
      />
      
     
    </div> 
       
         </Box>
    
  );

        
          
}

export default ApplyTable