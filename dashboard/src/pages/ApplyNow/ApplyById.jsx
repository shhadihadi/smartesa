import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import useFetch from '../../useFetch';
import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

function ApplyById() {
    const { error, isPending, data: Apply } = useFetch('http://localhost:8000/Apply')
    const downloadPdfById = async (id) => {
        const response = await fetch(`http://localhost:8000/Apply/${id}.pdf`);
        const blob = await response.blob();
      
        saveAs(blob, `Apply-${id}.pdf`);
      };
   
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
  
    // pdfjs.GlobalWorkerOptions.workerSrc = `//http://localhost:8000/Apply/:PDFUpload${pdfjs.version}/pdf.worker.js`;
  
    // const onDocumentLoadSuccess = ({ numPages }) => {
    //   setNumPages(numPages);
    // };





    
 

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="edit">
            <div className="cretetile"><h2>User Information</h2></div>
            { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
        {Apply &&
            Apply.map(val =>( 
            <form >
            <div key={val.id} >
                    <label>First Name</label>
                    <h5>{val.FN}</h5>
                  </div>
                  <div>
                    <label>Last Name</label>
                    <h5>{val.LN}</h5>
                  </div>
                 < div>
                    <label>Mobile </label>
                    <h5>{val.Mobile}</h5>
                
                  </div>
                <div>
             <label>Email</label>
              
             <h5>{val.Email}</h5>
              </div>
              
              <div>
             <label>ProjectCOMname</label>
              
             <h5>{val.ProjectCOMname}</h5>
              </div>
              <div>
             <label>FunStatus</label>
              
             <h5>{val.fundStatus}</h5>
              </div>
              <div>
             <label>FunSStatusBB</label>
              
             <h5>{val.fundSStatusBB}</h5>
              </div>

              <div>
             <label>Text</label>
              
             <h5>{val.text}</h5>
              </div>
             
              {/* <div>
             <label>SelectfundStatus</label>
              
             <h4>{val.SelectfundStatus?.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))} 
                        </h4>
              </div> */}
               <div>
             <label>Custom Website</label>
              
             <h5>{val.CustomWebsite}</h5>
              </div>
              <div>
             <label>Media Link</label>
              
             <h5>{val.MediaLink}</h5>
              </div>

              <div>
             <label>Media Link1</label>
              
             <h5>{val.MediaLink1}</h5>
              </div>
              <div>
             <label>Pdf Upload</label>
             <div>
             <Button onClick={downloadPdfById}>Download PDF</Button>
      {/* <Document
        file={val.PDFUpload}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
              
             {/* <h5>{val.PDFUpload}</h5> */}
              </div>
              <div>
             <label>Text1</label>
              
             <h5>{val.text1}</h5>
              </div>

              
              
                <Link to="/apply">Back</Link>  
            </form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
 }

export default ApplyById;


