import React from "react"
import Heading from "../common/heading/Heading"
import OurCommunity from "./PriceCard";

const Hprice = () => {
  return (
    <>
      <section className='hprice paddingP'>
        <Heading subtitle='OUR Community' title='Meet Our Community' />
        <div className="priceCO containerCO gridCO">
          <OurCommunity />
        </div>
      </section>
    </>
  )
}

export default Hprice
