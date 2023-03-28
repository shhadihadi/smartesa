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

function ApplyById() {
  const { id } = useParams();
  const { error, isPending, data: Apply } = useFetch('http://localhost:8000/Apply/' + id);

  const downloadPdf = async () => {
    const response = await fetch(`http://localhost:8000/Apply/${id}.pdf`);
    const blob = await response.blob();
    saveAs(blob, `Apply-${id}.pdf`);
  };

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
            { Apply &&
              <form>
                <div>
                  <label>First Name</label>
                  <h5>{Apply.FN}</h5>
                </div>
                <div>
                  <label>Last Name</label>
                  <h5>{Apply.LN}</h5>
                </div>
                <div>
                  <label>Mobile </label>
                  <h5>{Apply.Mobile}</h5>
                </div>
                <div>
                  <label>Email</label>
                  <h5>{Apply.Email}</h5>
                </div>
                <div>
                  <label>ProjectCOMname</label>
                  <h5>{Apply.ProjectCOMname}</h5>
                </div>
                <div>
                  <label>FunStatus</label>
                  <h5>{Apply.fundStatus}</h5>
                </div>
                <div>
                  <label>FunSStatusBB</label>
                  <h5>{Apply.fundSStatusBB}</h5>
                </div>
                <div>
                  <label>Text</label>
                  <h5>{Apply.text}</h5>
                </div>
                <div>
                  <label>Custom Website</label>
                  <h5>{Apply.CustomWebsite}</h5>
                </div>
                <div>
                  <label>Media Link</label>
                  <h5>{Apply.MediaLink}</h5>
                </div>
                <div>
                  <label>Media Link1</label>
                  <h5>{Apply.MediaLink1}</h5>
                </div>
                <div>
                  <label>Pdf Upload</label>
                  <div>
                    <Button onClick={downloadPdf}>Download PDF</Button>
                  </div>
                </div>
                <div>
                  <label>Text1</label>
                  <h5>{Apply.text1}</h5>
                </div>
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
