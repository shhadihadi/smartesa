import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import useFetch from '../../useFetch';
import { Box , IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { CSVLink } from 'react-csv';

import './apply.scss'
import { DeleteOutlined } from '@mui/icons-material';

import * as  XLSX from'xlsx'



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
          width: 150,
        },
        {
          field: 'ProjectCOMname',
          headerName: 'Project Name',
          type: 'text',
          width: 150,
        },
        {
          field: 'Email',
          headerName: 'Email',
          type: 'email',
          width: 100,
        },
        {
          field: 'CustomWebsite',
          headerName: 'Customer Website',
          type: 'text',
          width: 100,
        },
        
        {
          field: 'actions',
          headerName: 'Actions',
          type: 'actions',
          width: 100,
          renderCell: (params) => {
            return (
              
                <div
                  className="deleteButton"
                  onClick={() => handledelete(params.row.id)}
                >
               <DeleteOutlined />
                </div>
             
            );
            },
              },
              {
                field: 'view',
                headerName: 'View ',
                type: 'view',
                width: 100,
                renderCell: (params) => {
                  return (
                    <div className="cellAction">
                         <Link to={`/applyById/${params.row.id}`}style={{ textDecoration: "none" }}>
                    <div className="viewButton">View</div>
                  </Link>
                      
                    </div>
                  );
                  },
                    },
                    {
                      field: "export",
                      headerName: "",
                      sortable: false,
                      width: 100,
                      renderCell: (params) => {
                        const handleExport = () => {
                          const csvData = [
                            [params.row.id, params.row.FN, params.row.LN, params.row.Mobile, params.row.ProjectCOMname, params.row.Email, params.row.CustomWebsite]
                          ];
                          const csvContent = "data:text/csv;charset=utf-8," + csvData.map(row => row.join(",")).join("\n");
                          const encodedUri = encodeURI(csvContent);
                          const link = document.createElement("a");
                          link.setAttribute("href", encodedUri);
                          link.setAttribute("download", `${params.row.id}.csv`);
                          document.body.appendChild(link);
                          link.click();
                        };
                        return (
                          <IconButton onClick={handleExport}>
                            {/* <GetAppIcon /> */}
                          </IconButton>
                        );
                      }
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
    XLSX.writeFile(workbook, 'apply.xlsx');
  }}>
    <span color="dark">Export Excel</span>
  </IconButton>
     
    </div> 
       
         </Box>
    
  );

        
          
}

export default ApplyTable