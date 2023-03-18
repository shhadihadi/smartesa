import React from "react";
import Back from "../common/back/Back";
import "./price.css";
import Faq from "./Faq";
import OurCommunity from "./OurCommunityID";
import useFetch from "../useFetch";

const Pricing = () => {
  const { error, isPending, data: OURCOMMUNITYHome } = useFetch(
    "http://localhost:8000/OURCOMMUNITYHome"
  );

  const paragraphs = OURCOMMUNITYHome ? OURCOMMUNITYHome[0].Paragraphs : null;
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {paragraphs && (
        <Back
          title={OURCOMMUNITYHome[0].title}
          paragraphs={paragraphs} 
        />
      )}
      
      {<OurCommunity  /> }
      {/* {<Faq /> } */}
      
    </>
  );
};

export default Pricing;