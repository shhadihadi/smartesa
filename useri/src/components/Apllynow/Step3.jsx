import React from 'react';
import "./apply.css";
import "./addfor.scss";

function Step3({ nextStep, prevStep, handleChange, formData }) {
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
    <form onSubmit={nextStep}>
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
      />
      <label htmlFor="Media" className="form__labelHadi">
      Media Link
      </label>
    </div>
    <div className="placeforImage">
      
    </div>
    <div className="applyHadidissplayAsonline">
      <input type="file" id="images" accept="image/*" required />
      
    </div>

      </div>
      
      <div className="textaraategui">
        {/* <div className="divnoName"> */}
        {/* <p>hadi</p> */}
        {/* </div> */}
      <textarea id="HOW MANY FOUNDERS ARE YOU ?" cols="30" rows="10" placeholder="Message"></textarea>
      </div>
      </div>
    
    <br />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Push</button>
    </form>
    </div>
    </div>
    </div>

  );
}

export default Step3;