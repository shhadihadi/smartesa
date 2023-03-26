import { createContext,useState } from "react";

const ApplyFormDataContext = createContext();

const UseContext = ({ children }) => {

  const [FN, setFN] = useState("");
  const [LN, setLN] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [ProjectCOMname, setProjectCOMname] = useState("");
  const [fundStatus, setFundStatus] = useState(""); // initialize with "No" as default value
  const [fundSStatusBB, setfundSStatusBB] = useState(""); // initialize with "No" as default value
  const [text, settext] = useState(""); // initialize with "No" as default value

  const [SelectfundStatus, setSelectfundStatus] = useState([]); // initialize with "No" as default value
  const [SelectfundStatusBB, setSelectfundStatusBB] = useState([]); // initialize with "No" as default value

  const [customWebsite, setCustomWebsite] = useState("");
  const [MediaLink, setMediaLink] = useState("");
  const [MediaLink2, setMediaLink2] = useState("");
  const [PDFUpload, setPDFUpload] = useState(null);
  const [text1, settext1] = useState(""); // initialize with "No" as default value


  return (
    <ApplyFormDataContext.Provider
      value={{
        FN,setFN,
        LN, setLN,
        Mobile, setMobile,
        Email, setEmail,
        ProjectCOMname, setProjectCOMname,
        fundStatus, setFundStatus,
        fundSStatusBB, setfundSStatusBB,
        text, settext,
        SelectfundStatus, setSelectfundStatus,
        SelectfundStatusBB, setSelectfundStatusBB,
        customWebsite, setCustomWebsite,
        MediaLink, setMediaLink,
        MediaLink2, setMediaLink2,
        PDFUpload, setPDFUpload,
        text1, settext1
        
      }}

      >
        {children}
        </ApplyFormDataContext.Provider>
  )
  

};
export { UseContext, ApplyFormDataContext };