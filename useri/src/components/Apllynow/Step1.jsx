import "./apply.css";

function Step1({ nextStep, handleChange, formData }) {
  return (
    <div className="applyformAMain">
      <div className="exitformApply">exit</div>
      <div className="Formapplysetall">
      <div className="morefordesidn"></div>
      <div className="subMainFormApplyHadi">
        <form onSubmit={nextStep}>
          <div className="formaWidhthundred">
        <div className="field field_v1">
      <label htmlFor="first-name" className="ha-screen-reader">
        First name
      </label>
      <input
        id="first-name"
        className="field__input"
        placeholder="e.g. Stanislav"
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">First name</span>
      </span>
    </div>
    <div className="field field_v1">
      <label htmlFor="Last-name" className="ha-screen-reader">
        Last name
      </label>
      <input
        id="first-name"
        className="field__input"
        placeholder="e.g. Stanislav"
      />
      <span className="field__label-wrap" aria-hidden="true">
        <span className="field__label">Last name</span>
      </span>
    </div>
    </div>
    <div className="formaWidhthundred">
        <div className="field field_v2">
      <label htmlFor="first-name" className="ha-screen-reader">
      Mobile Number
      </label>
      <input
        id="first-name"
        className="field__input"
        placeholder="03837264"
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

    </div>
    {/* <div className="formaWidhthundred"> */}
      <div className="asusaulDISPLAY">
    <label for="message">Message</label>
    <textarea id="message" cols="30" rows="10" placeholder="Message"></textarea>
    </div>
    {/* </div> */}
    
        
          <button type="submit">Next</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Step1;
