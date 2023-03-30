import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link, useParams } from 'react-router-dom';
import { Button } from "@mui/material";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import React from 'react';
import { saveAs } from 'file-saver';
import useFetch from '../../useFetch';
import './apply.scss'


function ApplyById() {
  const { id } = useParams();
  const { error, isPending, data: Apply } = useFetch('http://localhost:8000/Apply/' + id);



  const downloadPdf = async () => {
    const response = await fetch('http://localhost:8000/Apply/PDFUpload');
    const base64data = await response.text();
    const blob = b64toBlob(base64data, 'application/pdf');
    saveAs(blob, 'PDFUpload.pdf');
  };
  
  // Helper function to convert base64 string to Blob object
  function b64toBlob(b64Data, contentType='application/octet-stream', sliceSize=512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
  

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="edit">
            <h2>User Information</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { Apply &&
            <form className="aplyyypy">
            <p style={{ display: 'inline-block' }}><strong>First Name: </strong>{Apply.FN}</p>
            <p style={{ display: 'inline-block' }}><strong>Last Name: </strong>{Apply.LN}</p>
            <p style={{ display: 'inline-block' }}><strong>Mobile: </strong>{Apply.Mobile}</p>
            <p style={{ display: 'inline-block' }}><strong>Email: </strong>{Apply.Email}</p>
            <p style={{ display: 'inline-block' }}><strong>ProjectCOMname: </strong>{Apply.ProjectCOMname}</p>
            <p style={{ display: 'inline-block' }}><strong>FunStatus: </strong>{Apply.fundStatus}</p>
            <p style={{ display: 'inline-block' }}><strong>FunSStatusBB: </strong>{Apply.fundSStatusBB}</p>
            <p style={{ display: 'inline-block' }}><strong>Text: </strong>{Apply.text}</p>
            <p style={{ display: 'inline-block' }}><strong>Custom Website: </strong>{Apply.CustomWebsite}</p>
            <p style={{ display: 'inline-block' }}><strong>Media Link: </strong>{Apply.MediaLink}</p>
            <p style={{ display: 'inline-block' }}><strong>Media Link1: </strong>{Apply.MediaLink1}</p>
            <p style={{ display: 'inline-block' }}><strong>Pdf Upload: </strong><Button onClick={downloadPdf}>Download PDF</Button></p>
            <p style={{ display: 'inline-block' }}><strong>Text1: </strong>{Apply.text1}</p>
           
     
    
            <Link to="/apply">Back</Link>
          </form>
          
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyById;
