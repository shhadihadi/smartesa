import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import useFetch from '../../useFetch';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import './apply.scss'
import { DeleteOutlined, ViewArray } from '@mui/icons-material';





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
          width: 70,
        },
        
        {
          field: 'fundStatus',
          headerName: 'Fund Status',
          type: 'text',
          width: 150
        },
        {
          field: 'fundSStatusBB',
          headerName: 'Fund Status BB',
          type: 'text',
          width: 150,
        },
        {
          field: 'text',
          headerName: 'Text',
          type: 'text',
          width: 150,
        },
        // {
        //   field: 'SelectfundStatus',
        //   headerName: 'Select fund Status',
        //   type: 'text',
        //   width: 70,
        // },
        // {
        //   field: 'SelectfundStatusBB',
        //   headerName: 'Select fund Status BB',
        //   type: 'text',
        //   width: 70,
        // },
        // {
        //   field: 'CustomWebsite',
        //   headerName: 'CustomWebsite',
        //   type: 'text',
        //   width: 70,
        // },
        // {
        //   field: 'MediaLink',
        //   headerName: 'MediaLink',
        //   type: 'text',
        //   width: 70,
        // },
        // {
        //   field: 'MediaLink2',
        //   headerName: 'MediaLink2',
        //   type: 'text',
        //   width: 70,
        // },
        // {
        //   field: 'PDFUpload',
        //   headerName: 'PDFUpload',
        //   type: 'pdf',
        //   width: 70,
        // },
        // {
        //   field: 'text1',
        //   headerName: 'text',
        //   type: 'text',
        //   width: 70,
        // },
        
        
        

       
       
              {
                field: 'actions1',
                headerName: 'Actions1',
                type: 'actions',
                width: 100,
                renderCell: (params) => {
                  return (
                   
                      <div
                       className="cellAction"
                        onClick={() => handledelete(params.row.id)}
                      >
                     <DeleteOutlined />
                     
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