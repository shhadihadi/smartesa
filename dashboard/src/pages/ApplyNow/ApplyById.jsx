import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link, useParams } from 'react-router-dom';
import { Button } from "@mui/material";

import 'jspdf-autotable';
import React from 'react';
import { saveAs } from 'file-saver';
import useFetch from '../../useFetch';
import './apply.scss'
import jsPDF from 'jspdf';

function ApplyById() {
  const { id } = useParams();
  const { error, isPending, data: Apply } = useFetch(`http://localhost:8000/Apply/${id}`);

  const downloadPdfById = async (id) => {
    
      const response = await fetch(`http://localhost:8000/Apply/PDFUpload/${id}`)
      .then(response => response.json())
      .then(data => {
        const binaryString = atob(data.base64String);
        const uint8Array = Uint8Array.from(binaryString, character => character.charCodeAt(0));
        const pdf = new jsPDF();
        pdf.addImage(uint8Array, 'PDF', 0, 0, 210, 297);
        pdf.save('document.pdf');
      })
     
  }

  // // Helper function to convert base64 string to Blob object
  // function b64toBlob(b64Data, contentType='application/octet-stream', sliceSize=512) {
  //   const byteCharacters = atob(b64Data);
  //   const byteArrays = [];
  //   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //     const slice = byteCharacters.slice(offset, offset + sliceSize);
  //     const byteNumbers = new Array(slice.length);
  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }
  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }
  //   const blob = new Blob(byteArrays, {type: contentType});
  //   return blob;
  // }
  
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
            <form className="Apply">
              <div className="mainwalaabigclass">
              
              <div className="displayonOnleLineWalaa">
            <p style={{ display: 'inline-block' }}><strong>First Name: </strong>{Apply.FN}</p> 
             <p style={{ display: 'inline-block' }}><strong>Mobile: </strong>{Apply.Mobile}</p>
            <p style={{ display: 'inline-block' }}><strong>ProjectCOMname: </strong>{Apply.ProjectCOMname}</p> 
            <p style={{ display: 'inline-block' }}><strong>FunSStatusBB: </strong>{Apply.fundSStatusBB}</p>
           <p style={{ display: 'inline-block' }}><strong>Custom Website: </strong>{Apply.CustomWebsite}</p>
           <p style={{ display: 'inline-block' }}><strong>Media Link1: </strong>{Apply.MediaLink1}</p> 
           
         
            </div>
            <div className="displayonOnleLineWalaa">

           
         
            </div>
            <div className="displayonOnleLineWalaa">
           <p style={{ display: 'inline-block' }}><strong>Last Name: </strong>{Apply.LN}</p>
            <p style={{ display: 'inline-block' }}><strong>Email: </strong>{Apply.Email}</p>
            <p style={{ display: 'inline-block' }}><strong>FunStatus: </strong>{Apply.fundStatus}</p>
              <p style={{ display: 'inline-block' }}><strong>Text: </strong>{Apply.text}</p>
              <p style={{ display: 'inline-block' }}><strong>Media Link: </strong>{Apply.MediaLink}</p>
                <p style={{ display: 'inline-block' }}><strong>Text1: </strong>{Apply.text1}</p>
                 </div>
                 <div className="displayonOnleLineWalaa" style={{width:"100%",justifyContent:"center",textAlign:"center"}}>
                 <p style={{ display: 'inline-block' }}><strong>Pdf Upload: </strong><Button onClick={ downloadPdfById}>Download PDF</Button></p>
                  <Link to="/apply">Back</Link>
                  </div>
                 
          
          
           
          
     
                 </div>
           
          </form>
          
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyById;
