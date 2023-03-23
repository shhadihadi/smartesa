import React from "react"
import Heading from "../common/heading/Heading"
import OurCommunity from "../pricing/OurCommunityID";

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='OUR Community' title='Meet Our Community' />
        <div>
          <OurCommunity />
        </div>
      </section>
    </>
  )
}

export default Hprice
