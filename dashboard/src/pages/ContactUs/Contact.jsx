import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './contact.scss';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from '@mui/material/IconButton';
import useFetch from '../../useFetch';
import { DeleteOutlined } from'@mui/icons-material';
import { Link } from 'react-router-dom';
import ContactHome from './ContactHome';
import { CSVLink } from "react-csv";
import * as XLSX from 'xlsx';

const Contact = () => {
  const { error, isPending, data: contact } = useFetch('http://localhost:8000/contact');
  
  const handledelete = (id) => {
    fetch(`http://localhost:8000/contact/${id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };
 
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/><h2>Contact Us</h2>
        <div className='Contact1'>
          <ContactHome />
        </div>
        <div className='Contact'>
          <TableContainer className="table">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">First Name</TableCell>
                  <TableCell className="tableCell">Last Name</TableCell>
                  <TableCell className="tableCell">Subject</TableCell>
                  <TableCell className="tableCell">Email</TableCell>
                  <TableCell className="tableCell">Message</TableCell>
                  <TableCell className="tableCell">Action</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {contact && contact.map(row => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.firstName}</TableCell>
                    <TableCell className="tableCell">{row.lastName}</TableCell>
                    <TableCell className="tableCell">{row.subject}</TableCell>
                    <TableCell className="tableCell">{row.email}</TableCell>
                    <TableCell className="tableCell">{row.message}</TableCell>
                   
                    <TableCell className="tableCell">
                      <IconButton>
                        <DeleteOutlined onClick={() => handledelete(row.id)} />
                      </IconButton>
                    </TableCell>
                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
  }}>
    <span>Export Excel</span>
  </IconButton>
)}
        </div>
      
      </div>
    </div>
  );
}

export default Contact;
