import React from "react"
import { useLocation } from "react-router-dom"
import "./backId.css"

const Back = ({ title,paragraphs }) => {
  const location = useLocation()

  return (
    <>
      <section className='backId'>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        <h1 className='backId-title'>{title}</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="back-text">{paragraph}</p>
        ))}
      </section>
      <div className='marginId'></div>
    </>
  )
}

export default Back