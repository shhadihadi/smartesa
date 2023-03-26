import "./apply.css";
import "./addfor.scss"
import { useState,useContext } from "react";
import {ApplyFormDataContext} from "../../UseContext"
import { useLocation, useNavigate } from 'react-router-dom';

function Step1({ nextStep, 
  FN,LN,Mobile,Email,ProjectCOMname,fundStatus,fundSStatusBB,texthandleChange, 
  formData, handleFNChange,handleLNChange,handleMobileChange,handleEmailChange,
  handleProjectCOMnameChange,handlefundStatusChange,handlefundSStatusBBChange,handletextChange }) {
  // const [FN, setFN] = useState("");
  // const [LN, setLN] = useState("");
  // const [Mobile, setMobile] = useState("");
  // const [fundStatus, setFundStatus] = useState(""); // initialize with "No" as default value
  // const [fundSStatusBB, setfundSStatusBB] = useState(""); // initialize with "No" as default value
  // const {FN,LN,Mobile,Email,ProjectCOMname,fundStatus,fundSStatusBB,text}=useContext(ApplyFormDataContext)
  const location = useLocation();

  const navigate = useNavigate();

  // function to go back to previous page
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="applyformAMain">
      <div className="exitformApply" onClick={goBack}>close </div>
      <div className="exitformApplysmallSCREEN"  onClick={goBack}>close </div>
      <div className="Formapplysetall">
      <div className="morefordesidn">
        <div className="activecolor">
        <p>1</p>
      </div>
    <div className="fornbForm"><p>2</p></div>
      <div className="fornbForm"><p>3</p></div>
      </div>
      <div className="subMainFormApplyHadi">
        <form onSubmit={nextStep}>
          <div className="formaWidhthundred">
            <div className="nowBodyCanKnow">
        <div className="field field_v1">
      <label htmlFor="first-name" className="ha-screen-reader">
        First name
      </label>
      <input
        id="first-name"
        className="field__input"
        placeholder="F.N "
        value={FN} onChange={handleFNChange}
        required
        // value={FN}
        //           onChange={(e) => setFN(e.target.value)} 
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">First name</span>
      </span>
    </div>
    </div>
    <div className="nowBodyCanKnow">
    <div className="field field_v1">
      <label htmlFor="Last-name" className="ha-screen-reader">
        Last name
      </label>
      <input
        id="Last-name"
        className="field__input"
        placeholder="LN. Stanislav" required
        // value={LN}
                  // onChange={(e) => setLN(e.target.value)} 
                  value={LN} onChange={handleLNChange}
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">Last name</span>
      </span>
    </div>
    </div>
    </div>
    <div className="formaWidhthundred">
        <div className="field field_v2">
      <label htmlFor="Mobile-name" className="ha-screen-reader">
      Mobile Number
      </label>
    <input
  id="Mobile-name"
  className="field__input"
  placeholder="03837264" required
  // value={Mobile}
  // onChange={(e) => {
  //   const inputVal = e.target.value;
  //   if (/^\d*$/.test(inputVal)) {
  //     setMobile(inputVal);
  value={Mobile} onChange={handleMobileChange}
  //   }
  // }}
  
/>
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">Mobile Number</span>
      </span>
    </div>
    <div className="field field_v3">
      <label htmlFor="email" className="ha-screen-reader">
        E-mail
      </label>
      <input
        id="email"
        className="field__input"
        placeholder="e.g. melnik909@ya.ru" required
        // value={Email}
        // onChange={(e) => setEmail(e.target.value)} 
        value={Email} onChange={handleEmailChange}
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">E-mail</span>
      </span>
    </div>
    </div>
    <div className="formaWidhthundred" >
        <div className="field field_v2" style={{justifyContent:"left"}}>
      <label htmlFor="first-name" className="ha-screen-reader" style={{width:"200% !important"}}>
      Project/Company Name      </label>
      <input
        id="Project"
        className="field__input"
        placeholder="optional"
        style={{width:"200% !important"}} required
        // value={ProjectCOMname}
        // onChange={(e) => setProjectCOMname(e.target.value)} 
        value={ProjectCOMname} onChange={handleProjectCOMnameChange}
      />
      <span className="field__label-wrap" aria-hidden="true" style={{width:"200% !important"}}>
        <span className="field__label" style={{width:"200% !important"}}>Project/Company Name</span>
      </span>
    </div>
    <div style={{width:"220px"}}></div>

    </div>
    <div className="formaWidhthundredexpxert">
      <div className="selecttoolsapplyForm">
      <div className="oneSlectFORMApply">
      <p>HAVE YOU RAISED FUNDS ?</p>
      <div className="radio-group">
        <input
          type="radio"
          id="option-one"
          name="selector"
          value="Yes"
          checked={fundStatus === "Yes"}
          onChange={handlefundStatusChange}
          // onChange={handleGenderChange}
        />
        <label htmlFor="option-one">Yes</label>

        <input
          type="radio"
          id="option-two"
          name="selector"
          value="IN PROCESS"
          checked={fundStatus === "IN PROCESS"}
          onChange={handlefundStatusChange}
        />
        <label htmlFor="option-two">IN PROCESS</label>

        <input
          type="radio"
          id="option-three"
          name="selector"
          value="No"
          checked={fundStatus === "No"}
          onChange={handlefundStatusChange}
        />
        <label htmlFor="option-three">No</label>
      </div>
    </div>
        <div className="oneSlectFORMApply">
          
          <p>ARE YOU LOOKING FOR FUNDS?</p>
          <div className="radio-group">
          <input type="radio" id="option-four" name="selectorhadi"  value="Yes" checked={fundSStatusBB === "Yes"} onChange={handlefundSStatusBBChange}/>
          <label htmlFor="option-four">Yes</label>
          <input type="radio" id="option-five" name="selectorhadi" value="No"  checked={fundSStatusBB === "No"}  onChange={handlefundSStatusBBChange} />
        <label htmlFor="option-five">No</label>
  </div>

        </div>
      </div>
      <div className="asusaulDISPLAY">
    <label for="message">What About Your Project</label>
    <textarea id="message" cols="30" rows="10" placeholder="Write...."
    //  value={text}
    //     onChange={(e) => settext(e.target.value)} 
    onChange={handletextChange}
         >
          
        </textarea>
    </div>
    </div>
    
        
          <button type="submit">Next</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Step1;

