import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import useFetch from "../../components/useFetch";

const Pricing = () => {
  const { error, isPending, data: OURCOMMUNITYHome } = useFetch('http://localhost:8000/OURCOMMUNITYHome');

  // extract the "Paragraphs" array from the first object in the "OURCOMMUNITYHome" array
  const paragraphs = OURCOMMUNITYHome ? OURCOMMUNITYHome[0].Paragraphs : null;
  return (
    <>
          { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
        <Back 
          title= {OURCOMMUNITYHome[0].title}
          paragraphs={paragraphs} // pass the entire "Paragraphs" array as a prop
        />
      )}
      <section className='price padding'>
        <div className='container gridP'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
