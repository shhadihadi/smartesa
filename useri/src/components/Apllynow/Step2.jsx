import React from 'react';
import "./apply.css";

function Step2({ nextStep, prevStep, handleChange, formData }) {
  return (
    <div className="applyformAMain">
    <div className="exitformApply">close</div>
    <div className="exitformApplysmallSCREEN">close</div>
    <div className="Formapplysetall">
    <div className="morefordesidn">
      
    <div className="fornbForm"><p>1</p></div>
    <div className="activecolor">
        <p>2</p>
      </div>
      <div className="fornbForm"><p>3</p></div>
      </div>
    <div className="subMainFormApplyHadi">
    <form onSubmit={nextStep}>
      {/* <div className="flexforcheckButtons"> */}

      <div className="boxesapplyKnow">
        <p>SELECT THE CLOSEST ANSWER TO YOUR SITUATION</p>
    <input type="checkbox" id="box-1" />
    <label htmlFor="box-1">WE JUST HAVE AN IDEA</label>
    {/* <input type="checkbox" id="box-2" defaultChecked />
    <label htmlFor="box-2">Gentrify pickled kale chips </label> */}
    <input type="checkbox" id="box-3" />
    <label htmlFor="box-3">WE HAVE AN MVP AND WE ARE GENERATING SALES</label>
  </div>
  <div className="boxesapplyKnowB">
        <p>WHICH INDUSTRIES DO YOU OPERATE IN ?</p>
        <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-5" />
    <label htmlFor="box-5">E-HEALTH</label>
    <input type="checkbox" id="box-6" />
    <label htmlFor="box-6">E-COMMERCE</label>
    <input type="checkbox" id="box-7" />
    <label htmlFor="box-7">MARKETPLACE</label>
    <input type="checkbox" id="box-8" />
    <label htmlFor="box-8">INSURTECH</label>
    </div>
    <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-81" />
    <label htmlFor="box-81">IOT</label>
    <input type="checkbox" id="box-82" />
    <label htmlFor="box-82">PRODUCT</label>  
      <input type="checkbox" id="box-10" />
    <label htmlFor="box-10">EDTECH</label>
    </div>
    <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-11" />
    <label htmlFor="box-11">TRAVEL TECHNOLOGY</label>   
     <input type="checkbox" id="box-110" />
    <label htmlFor="box-110">FINTECH</label>
    <input type="checkbox" id="box-12" />
    <label htmlFor="box-12">CONTECH</label>
    </div>
    <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-13" />
    <label htmlFor="box-13">BEAUTY/FASHION/LUXURY</label>
    <input type="checkbox" id="box-14" />
    <label htmlFor="box-14">MEDIA TECHNOLOGY</label>
    <input type="checkbox" id="box-15" />
    <label htmlFor="box-15">SOFTWARE</label> 
    </div> 
    <div className="dislpayAasrosAPPly">
      <input type="checkbox" id="box-16" />
    <label htmlFor="box-16">FMCG</label>
    <input type="checkbox" id="box-17" />
    <label htmlFor="box-17">AGRICULTURE</label>   
     <input type="checkbox" id="box-18" />
    <label htmlFor="box-18">SPORTS</label>
    </div>
  

  </div>
      {/* </div> */}
      

    {/* </div> */}
    <br />
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
    </div>
    </div>
    </div>

  );
}

export default Step2;