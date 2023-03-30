import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import "./apply.css";
import { useLocation, useNavigate } from 'react-router-dom';

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [FN, setFN] = useState("");
  const [LN, setLN] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [ProjectCOMname, setProjectCOMname] = useState("");
  const [fundStatus, setFundStatus] = useState("");
  const [fundSStatusBB, setfundSStatusBB] = useState("");
  const [text, settext] = useState("");

  const [SelectfundStatus, setSelectfundStatus] = useState([]);
  const [SelectfundStatusBB, setSelectfundStatusBB] = useState([]);

  const [CustomWebsite, setCustomWebsite] = useState("");
  const [MediaLink, setMediaLink] = useState("");
  const [MediaLink2, setMediaLink2] = useState("");
  const [PDFUpload, setPDFUpload] = useState(null);  
  const [text1, settext1] = useState(""); 

  const location = useLocation();
  const navigate = useNavigate();

  // function to go back to previous page
  const goBack = () => {
    navigate(-1);
  }

  // previous page location
  const previousLocation = location.state?.from;

  const handlecustomWebsiteChange = (e) => {    
    setCustomWebsite(e.target.value);
  };

  const handleMediaLinkChange = (e) => {   
    setMediaLink(e.target.value);
  };

  const handleMediaLink2Change = (e) => {   
    setMediaLink2(e.target.value);
  };

  const handleHoverCoverChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        setPDFUpload(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPDFUpload(null);
      alert('Please select a PDF file.');
    }
  };

  const handletext1Change = (e) => {   
    settext1(e.target.value);
  };



  const handleSelectfundStatusChange = (e) => {
    if (e.target.checked) {
      setSelectfundStatus([...SelectfundStatus, e.target.value]);
    } else {
      setSelectfundStatus(SelectfundStatus.filter((hobbys) => hobbys !== e.target.value));
    }
  };

  const handleSelectfundStatusBBChange = (e) => {
    if (e.target.checked) {
      setSelectfundStatusBB([...SelectfundStatusBB, e.target.value]);
    } else {
      setSelectfundStatusBB(SelectfundStatusBB.filter((hobby) => hobby !== e.target.value));
    }
  };



  const handleFNChange = (e) => {   
    setFN(e.target.value);
  };

  const handleLNChange = (e) => {
    setLN(e.target.value);
  };

  const handleMobileChange = (e) => {   
    const inputVal = e.target.value;
    if (/^\d*$/.test(inputVal)) {
      setMobile(inputVal);
    }
  };

  const handleEmailChange = (e) => {  
    setEmail(e.target.value);
  };

  const handleProjectCOMnameChange = (e) => {
    setProjectCOMname(e.target.value);
  };

  const handlefundStatusChange = (e) => {
    setFundStatus(e.target.value);
  };

  const handlefundSStatusBBChange = (e) => {
    setfundSStatusBB(e.target.value);
  };

  const handletextChange = (e) => {
    settext(e.target.value);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const Apply = {
      FN,
      LN,
      Mobile,
      Email,
      ProjectCOMname,
      fundStatus,
      fundSStatusBB,
      text,
      SelectfundStatus:[SelectfundStatus],
      SelectfundStatusBB:[SelectfundStatusBB],
      CustomWebsite,
      MediaLink,
      MediaLink2,
      PDFUpload:PDFUpload,
      text1,
      id: Math.floor(Math.random() * 1000) + 1, // generate a random ID
    };
  
    fetch(`http://localhost:8000/Apply/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Apply),
    })
      .then(() => {
        goBack()
        
  
      })
      .catch((error) => {
        console.error(error);

      });
  };

  switch (step) { 
    case 1:
      return <Step1  nextStep={nextStep} FN={FN}  LN={LN} Mobile={Mobile} Email={Email} ProjectCOMname={ProjectCOMname} fundStatus={fundStatus} fundSStatusBB={fundSStatusBB} text={text} 
      handleFNChange={handleFNChange} handleLNChange={handleLNChange} handleMobileChange={handleMobileChange} handleEmailChange={handleEmailChange}
      handlefundStatusChange={handlefundStatusChange} handlefundSStatusBBChange={handlefundSStatusBBChange} handletextChange={handletextChange} handleProjectCOMnameChange={handleProjectCOMnameChange}
      />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep}  SelectfundStatus={SelectfundStatus} SelectfundStatusBB={SelectfundStatusBB} 
      handleSelectfundStatusChange={handleSelectfundStatusChange} handleSelectfundStatusBBChange={handleSelectfundStatusBBChange}
      />;
    case 3:
      return <Step3 prevStep={prevStep} handleSubmit={handleSubmit}  CustomWebsite={CustomWebsite} MediaLink={MediaLink} MediaLink2={MediaLink2} PDFUpload={PDFUpload} text1={text1}
      handlecustomWebsiteChange={handlecustomWebsiteChange} handleMediaLinkChange={handleMediaLinkChange} handleMediaLink2Change={handleMediaLink2Change} handleHoverCoverChange={handleHoverCoverChange} handletext1Change={handletext1Change}
       />;
    default:
      return null;
  }
}

export default MultiStepForm;