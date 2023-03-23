import React from "react"
import useFetch from "../useFetch"

const PriceCard = () => {
  const { error, isPending, data: price } = useFetch('http://localhost:8000/ourcommunity')
  return (
    <>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {price && price.map((val) => (
        <div className='itemsP shadowP' style={{boxShadow:'  rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
          <h4>{val.title}</h4>
          <h1>
            {/*<span>$</span>*/}
            {val.nb}
          </h1>
          <p>{val.paragraphs?.substring(0,130) + '...'}</p>
          <button className='outline-btn'>KNOW MORE</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
