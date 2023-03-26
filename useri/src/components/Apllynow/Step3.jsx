import React from 'react';
import "./apply.css";
import "./addfor.scss";
// import { useState,useContext } from "react";
// import {ApplyFormDataContext} from "../../UseContext"
import { useLocation, useNavigate } from 'react-router-dom';

function Step3({ nextStep, prevStep,handleSubmit,CustomWebsite,MediaLink,MediaLink2,text1,PDFUpload,handlecustomWebsiteChange,handleMediaLinkChange,handleMediaLink2Change,handleHoverCoverChange,handletext1Change }) {
  
  
  const location = useLocation();
  const navigate = useNavigate();

  // function to go back to previous page
  const goBack = () => {
    navigate(-1);
  }

  // previous page location
  const previousLocation = location.state?.from;
  
  return (
    <div className="applyformAMain">
    <div className="exitformApply">close</div>
    <div className="exitformApplysmallSCREEN">close</div>
    <div className="Formapplysetall">
    <div className="morefordesidn">
      
    <div className="fornbForm"><p>1</p></div>
  
      <div className="fornbForm"><p>2</p></div>
      
      <div className="activecolor">
        <p>3</p>
      </div>
      </div>
      
  
    <div className="subMainFormApplyHadi">
    <form  onSubmit={handleSubmit}>
      {/* <div className="flexforcheckButtons"> */}

    <div className="mainstap3form">
  <div className="flexforStep3">
  <div className="form__groupHadi fieldHadi">
    
      <input
        type="input"
        className="form__fieldHadi"
        placeholderhadi="Website"
        name="Website"
        id="Website"
        required
        value={CustomWebsite}
        onChange={handlecustomWebsiteChange}
      />
      <label htmlFor="Website" className="form__labelHadi">
      Custom Website
      </label>
    </div>
    <div className="form__groupHadi fieldHadi">
      <input
        type="input"
        className="form__fieldHadi"
        placeholderhadi="Insta"
        name="Insta"
        id="Insta"
        required
        value={MediaLink}
        onChange={handleMediaLinkChange}
        // onChange={(e) => setMediaLink(e.target.value)} 
      />
      <label htmlFor="Insta" className="form__labelHadi">
      Media Link
      </label>
    </div>
    <div className="form__groupHadi fieldHadi">
      <input
        type="input"
        className="form__fieldHadi"
        placeholderhadi="Media"
        name="Media"
        id="Media"
        required
        value={MediaLink2}
        onChange={handleMediaLink2Change}
      />
      <label htmlFor="Media" className="form__labelHadi">
      Media Link
      </label>
    </div>
    <div className="placeforImage">
      
    </div>
    <div className="applyHadidissplayAsonline">
      <input type="file" id="images"accept="image/pdf"
                    required
                    onChange={handleHoverCoverChange} />
      
    </div>

      </div>
      
      <div className="textaraategui">
        {/* <div className="divnoName"> */}
        {/* <p>hadi</p> */}
        {/* </div> */}
      <textarea id="HOW MANY FOUNDERS ARE YOU ?" cols="30" rows="10" placeholder="Message"  
        value={text1}
        onChange={handletext1Change}
        />
      </div>
      </div>
    
    <br />
      <button type="button" onClick={prevStep}>Back</button>
      <button  type="submit" onClick={handleSubmit} >Push</button>
    </form>
    </div>
    </div>
    </div>

  );
}

export default Step3;