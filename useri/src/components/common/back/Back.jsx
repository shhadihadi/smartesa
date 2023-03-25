import React from "react"
import { useLocation } from "react-router-dom"
import useFetch from "../../useFetch"

const Back = ({ title,paragraphs }) => {
  const location = useLocation()
  const { error, isPending, data: backImages } = useFetch('http://localhost:8000/backImages');

  return (
    <>

{backImages && backImages[1] && (
        
          <section className="back" style={{backgroundImage: `url(${backImages[1].coverIamge})`}}>
    
      
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        <h1 className='back-title'>{title}</h1>
        {/* <div className="whatever2"> */}
        {paragraphs?.split('\n').map((line, index) => (
  <p className="back-text">
    {line}
    
  </p>
))} 
        {/* </div> */}
      </section>
          )}
      <div className='margin'></div>
    </>
  )
}

export default Back

