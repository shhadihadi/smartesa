import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title,paragraphs }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        <h1 className='back-title'>{title}</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="back-text">{paragraph}</p>
        ))}
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
