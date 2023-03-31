import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './contact.scss';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import useFetch from '../../useFetch';
import { DeleteOutlined } from'@mui/icons-material';
import { Link } from 'react-router-dom';
import ContactHome from './ContactHome';
import { CSVLink } from "react-csv";
import * as XLSX from 'xlsx';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";


const Contact = () => {const { user } = useContext(AuthContext);
  const { error, isPending, data: contact } = useFetch('http://localhost:8000/contact');
  if (!user) {
    return <Navigate to="/login" />;
  }
  const handledelete = (id) => {
    fetch(`http://localhost:8000/contact/${id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };

  const columns = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'subject', headerName: 'Subject', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'message', headerName: 'Message', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,renderCell: (params) => {
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
          [params.row.id,  params.row.firstName, params.row.lastName,  params.row.subject, params.row.email, params.row.message]
        ];
        return (
          <CSVLink data={csvData} filename={`${params.row.id}.csv`}>Export</CSVLink>
        );
      }}
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <h2>Contact Us</h2>
        <div className='Contact1'>
          <ContactHome />
        </div>
        <div className='Contact'>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {contact && (
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={contact} columns={columns} />
            </div>
          )}
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {contact && (
            <IconButton
              className="my-icon-button"
              onClick={() => console.log('Clicked!')}
            >
              <CSVLink data={contact}>Export CSV</CSVLink>
            </IconButton>
          )}
          {contact && (
            <IconButton
              className="my-icon-button"
              onClick={() => {
                const workbook = XLSX.utils.book_new();
                const worksheet = XLSX.utils.json_to_sheet(contact);
                XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
                XLSX.writeFile(workbook, 'walaa.xlsx');
              }}
            >
              <span>Export Excel</span>
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
