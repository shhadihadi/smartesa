import "./apply.css";
import "./addfor.scss"
import { useState } from "react";

function Step1({ nextStep, handleChange, formData }) {
  const [FN, setFN] = useState("");
  const [LN, setLN] = useState("");
  const [Mobile, setMobile] = useState("");
  const [fundStatus, setFundStatus] = useState(""); // initialize with "No" as default value

  const handleFundStatusChange = (e) => {
    setFundStatus(e.target.value);
  };

  return (
    <div className="applyformAMain">
      <div className="exitformApply">close</div>
      <div className="exitformApplysmallSCREEN">close</div>
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
        value={FN}
                  onChange={(e) => setFN(e.target.value)} required
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
        placeholder="LN. Stanislav"
        value={LN}
                  onChange={(e) => setLN(e.target.value)} required
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
  placeholder="03837264"
  value={Mobile}
  onChange={(e) => {
    const inputVal = e.target.value;
    if (/^\d*$/.test(inputVal)) {
      setMobile(inputVal);
    }
  }}
  required
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
        placeholder="e.g. melnik909@ya.ru"
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">E-mail</span>
      </span>
    </div>
    </div>
    <div className="formaWidhthundred" >
        <div className="field field_v2" style={{justifyContent:"left"}}>
      <label htmlFor="first-name" className="ha-screen-reader" style={{width:"200% !important"}}>
      Mobile Number
      </label>
      <input
        id="first-name"
        className="field__input"
        placeholder="03837264"
        style={{width:"200% !important"}}
      />
      <span className="field__label-wrap" aria-hidden="true" style={{width:"200% !important"}}>
        <span className="field__label" style={{width:"200% !important"}}>Mobile Number</span>
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
          onChange={handleFundStatusChange}
        />
        <label htmlFor="option-one">Yes</label>

        <input
          type="radio"
          id="option-two"
          name="selector"
          value="IN PROCESS"
          checked={fundStatus === "IN PROCESS"}
          onChange={handleFundStatusChange}
        />
        <label htmlFor="option-two">IN PROCESS</label>

        <input
          type="radio"
          id="option-three"
          name="selector"
          value="No"
          checked={fundStatus === "No"}
          onChange={handleFundStatusChange}
        />
        <label htmlFor="option-three">No</label>
      </div>
    </div>
        <div className="oneSlectFORMApply">
          
          <p>ARE YOU LOOKING FOR FUNDS?</p>
          <div className="radio-group">
          <input type="radio" id="option-four" name="selectorhadi"  value="Yes"/>
          <label htmlFor="option-four">Yes</label>
          <input type="radio" id="option-five" name="selectorhadi" value="No" />
        <label htmlFor="option-five">No</label>
  </div>

        </div>
      </div>
      <div className="asusaulDISPLAY">
    <label for="message">What About Your Project</label>
    <textarea id="message" cols="30" rows="10" placeholder="Write...."></textarea>
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

