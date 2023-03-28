import React from "react"
import { useLocation } from "react-router-dom"
import "./backId.css"
import useFetch from "../../useFetch";

const Back = ({ title, paragraphs }) => {
  const location = useLocation();
  const {
    error,
    isPending,
    data: backImages,
  } = useFetch("http://localhost:8000/backImages");
  

  return (
    <>
    {backImages && backImages[1] && (
      <section className='backId' style={{ backgroundImage: `url(${backImages[2].coverIamge})` }}>
        <h1 className='backId-title'>{title}</h1>    
        
          <p className="back-text">
            {paragraphs.split("\n").map((line, index) => (
              <React.Fragment key={index} >
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>        
        
      </section>
      )}
      <div className='marginId'></div>
    </>
  )
}

export default Back