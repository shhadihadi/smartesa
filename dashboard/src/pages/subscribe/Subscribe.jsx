import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import useFetch from '../../useFetch';
import { Box, IconButton } from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from 'react';

import './sub.scss'
import { DeleteOutlined } from '@mui/icons-material';
import { CSVLink, CSVDownload } from 'react-csv';

import * as XLSX from 'xlsx';





const Subscribe= () => {
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
          width: 250,
        },
        {
          field: 'actions',
          headerName: 'Actions',
          type: 'actions',
          width: 250,
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
              {
                field: 'export',
                headerName: 'Export CSV',
                sortable: false,
                width: 100,
                renderCell: (params) => {
                  const csvData = [
                    [params.row.id,  params.row.email]
                  ];
                  return (
                    <CSVLink data={csvData} filename={`${params.row.id}.csv`}>Export</CSVLink>
                  );
                }}
      ];


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
     <IconButton
     className="my-icon-button"
     >
     <CSVLink data={tableData} filename={"my-table-data.csv"}>
    Export CSV
</CSVLink>

    </IconButton>

  
  <IconButton 
  className="my-icon-button"
  onClick={() => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'subscribes');
    XLSX.writeFile(workbook, 'walaa.xlsx');
  }}>
    <span color="dark">Export Excel</span>
  </IconButton>


      
      
    </div> 
       
         </Box>
     </div>
    </div>
    </div>
  );

        
          
}

export default Subscribe