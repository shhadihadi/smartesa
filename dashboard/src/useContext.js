import { createContext,useState } from "react";

const ApplyFormDataContext = createContext();

const UseContext = ({ children }) => {

  const [FN, setFN] = useState("");
  const [LN, setLN] = useState("");
  const [Mobile, setMobile] = useState("");
  const [fundStatus, setFundStatus] = useState(""); // initialize with "No" as default value
  const [fundSStatusBB, setfundSStatusBB] = useState(""); // initialize with "No" as default value
  const [text, settext] = useState(""); // initialize with "No" as default value

  const [SelectfundStatus, setSelectfundStatus] = useState([]); // initialize with "No" as default value
  const [SelectfundStatusBB, setSelectfundStatusBB] = useState([]); // initialize with "No" as default value

  const [customWebsite, setCustomWebsite] = useState("");
  const [MediaLink, setMediaLink] = useState("");
  const [MediaLink2, setMediaLink2] = useState("");
  const [PDFUpload, setPDFUpload] = useState("");
  const [text1, settext1] = useState(""); // initialize with "No" as default value


  return (
    <ApplyFormDataContext.Provider
      value={{
        FN,setFN,
        LN, setLN,
        Mobile, setMobile,
        fundStatus, setFundStatus,
        fundSStatusBB, setfundSStatusBB,
        text, settext,
        
      }}

      >
        {children}
        </ApplyFormDataContext.Provider>
  )
  

}