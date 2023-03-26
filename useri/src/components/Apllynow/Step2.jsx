import React from 'react';
import "./apply.css";
import { useState,useContext } from "react";
import {ApplyFormDataContext} from "../../UseContext"

function Step2({ nextStep, prevStep, SelectfundStatus,SelectfundStatusBB,handleSelectfundStatusChange,handleSelectfundStatusBBChange }) {

  // const [SelectfundStatus, setSelectfundStatus] = useState([]); // initialize with "No" as default value
  // const [SelectfundStatusBB, setSelectfundStatusBB] = useState([]); // initialize with "No" as default value
  // const {SelectfundStatus, setSelectfundStatus, SelectfundStatusBB, setSelectfundStatusBB}=useContext(ApplyFormDataContext)




    // const hadelcheckBOXX  =(event) =>{

    //   const { value } = event.target;
    //   const index = SelectfundStatusBB.indexOf(value);
      
    //   if (index > -1) {
    //     // If the value is already in the array, remove it
    //     const updatedArray = [...SelectfundStatus];
    //     updatedArray.splice(index, 1);
    //     setSelectfundStatus(updatedArray);
    //   } else {
    //     // If the value is not in the array, add it
    //     setSelectfundStatus([...SelectfundStatus, value]);
    //   }
    // }


    // const handleCheckboxChange = (event) => {
    //   const { value } = event.target;
    //   const index = SelectfundStatusBB.indexOf(value);
      
    //   if (index > -1) {
    //     // If the value is already in the array, remove it
    //     const updatedArray = [...SelectfundStatusBB];
    //     updatedArray.splice(index, 1);
    //     setSelectfundStatusBB(updatedArray);
    //   } else {
    //     // If the value is not in the array, add it
    //     setSelectfundStatusBB([...SelectfundStatusBB, value]);
    //   }
    // };
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
    <input type="checkbox" id="box-1"
     value="WE JUST HAVE AN IDEA"
     name="WE JUST HAVE AN IDEA"
     checked={SelectfundStatus.includes('WE JUST HAVE AN IDEA')}
  
      // checked={SelectfundStatus === "WE JUST HAVE AN IDEA"}
      // onChange={handleFundStatusChange}
      // checked={setSelectfundStatus === "WE JUST HAVE AN IDEA"}
     onChange={handleSelectfundStatusChange}
      />
    <label htmlFor="box-1">WE JUST HAVE AN IDEA</label>
    {/* <input type="checkbox" id="box-2" defaultChecked />
    <label htmlFor="box-2">Gentrify pickled kale chips </label> */}
    <input type="checkbox" id="box-3"
     value="WE HAVE AN MVP AND WE ARE GENERATING SALES"
     name="WE HAVE AN MVP AND WE ARE GENERATING SALES"
     checked={SelectfundStatus.includes('WE HAVE AN MVP AND WE ARE GENERATING SALES')}
    //  checked={setSelectfundStatus === "WE HAVE AN MVP AND WE ARE GENERATING SALES"}
      // checked={SelectfundStatus === [...SelectfundStatus, setSelectfundStatus]}
     onChange={handleSelectfundStatusChange}/>
    <label htmlFor="box-3">WE HAVE AN MVP AND WE ARE GENERATING SALES</label>
  </div>



  <div className="boxesapplyKnowB">
        <p>WHICH INDUSTRIES DO YOU OPERATE IN ?</p>
        <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-5" value="E-HEALTH"  
    name="E-HEALTH"
    checked={SelectfundStatusBB.includes('E-HEALTH')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-5">E-HEALTH</label>
    
    <input type="checkbox" value="E-COMMERCE" id="box-6"  name="E-COMMERCE"
      checked={SelectfundStatusBB.includes('E-COMMERCE')}
     onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-6">E-COMMERCE</label>
    <input type="checkbox" id="box-7" value="MARKETPLACE"  name="MARKETPLACE" 
      checked={SelectfundStatusBB.includes('MARKETPLACE')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-7">MARKETPLACE</label>
    <input type="checkbox" id="box-8"value="INSURTECH" name="MARKETPLACE"
      checked={SelectfundStatusBB.includes('INSURTECH')}
     onChange={handleSelectfundStatusBBChange} />
    <label htmlFor="box-8">INSURTECH</label>
    </div>
    <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-81" value="IOT" name="IOT"
      checked={SelectfundStatusBB.includes('IOT')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-81">IOT</label>
    <input type="checkbox" id="box-82" value="PRODUCT" name="PRODUCT" 
    checked={SelectfundStatusBB.includes('PRODUCT')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-82">PRODUCT</label>  
      <input type="checkbox" id="box-10"value="EDTECH"name="EDTECH"
      checked={SelectfundStatusBB.includes('EDTECH')}
      onChange={handleSelectfundStatusBBChange} />
    <label htmlFor="box-10">EDTECH</label>
    </div>
    <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-11" value="MARKETRAVEL TECHNOLOGYTPLACE"
    name="MARKETRAVEL TECHNOLOGYTPLACE"
    checked={SelectfundStatusBB.includes('MARKETRAVEL TECHNOLOGYTPLACE')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-11">TRAVEL TECHNOLOGY</label>   
     <input type="checkbox" id="box-110" value="FINTECH"name="FINTECH"
     checked={SelectfundStatusBB.includes('FINTECH')}
     onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-110">FINTECH</label>
    <input type="checkbox" id="box-12"value="CONTECH"name="CONTECH" 
    checked={SelectfundStatusBB.includes('CONTECH')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-12">CONTECH</label>
    </div>
    <div className="dislpayAasrosAPPly">
    <input type="checkbox" id="box-13"value="BEAUTY/FASHION/LUXURY" name="BEAUTY/FASHION/LUXURY"
    checked={SelectfundStatusBB.includes('BEAUTY/FASHION/LUXURY')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-13">BEAUTY/FASHION/LUXURY</label>
    <input type="checkbox" id="box-14"value="MEDIA TECHNOLOGY"name="MEDIA TECHNOLOGY"checked={SelectfundStatusBB.includes('MEDIA TECHNOLOGY')}
    onChange={handleSelectfundStatusBBChange} />
    <label htmlFor="box-14">MEDIA TECHNOLOGY</label>
    <input type="checkbox" id="box-15" value="SOFTWARE"name="SOFTWARE"checked={SelectfundStatusBB.includes('SOFTWARE')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-15">SOFTWARE</label> 
    </div> 
    <div className="dislpayAasrosAPPly">
      <input type="checkbox" id="box-16"value="FMCG"name="FMCG"
      checked={SelectfundStatusBB.includes('FMCG')}
      onChange={handleSelectfundStatusBBChange} />
    <label htmlFor="box-16">FMCG</label>
    <input type="checkbox" id="box-17" value="AGRICULTURE"name="AGRICULTURE"
    checked={SelectfundStatusBB.includes('AGRICULTURE')}
    onChange={handleSelectfundStatusBBChange}/>
    <label htmlFor="box-17">AGRICULTURE</label>   
     <input type="checkbox" id="box-18" value="SPORTS"name="SPORTS"
     checked={SelectfundStatusBB.includes('SPORTS')}
     onChange={handleSelectfundStatusBBChange}/>
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