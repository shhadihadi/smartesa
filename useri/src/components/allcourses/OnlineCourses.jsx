import React from "react"
import "./courses.css"
import Heading from "../common/heading/Heading"
import Awrapper from "../about/Awrapper"
import useFetch from "../../components/useFetch"
import { Link } from 'react-router-dom'

const OnlineCourses = () => {
  const { error, isPending, data: online } = useFetch('http://localhost:8000/online')
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading 
           title='METHODOLOGY' />
          <div className='content grid3' >


          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { online && <>
            {online.slice(0).reverse().map((val) => (  // Call slice(0) to create a copy of the array
              <div className='box' key={online.id}>
              <div className='img'>
                <img src={val.cover} />
                <img src={val.hoverCover} alt='' className='show' />
              </div>
              <h1>{val.courseName}</h1>
              <span>{val.course}</span>
            </div>
        
            ))}
            </> }
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default OnlineCourses
