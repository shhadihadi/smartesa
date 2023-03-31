import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import useFetch from "../../useFetch"
import { Link } from "react-router-dom";

const Hero = () => {
  const { error, isPending, data: backImages } = useFetch('http://localhost:8000/backImages');
  return (
    <>
    {backImages && backImages[0] && (
      <section className='hero' style={{backgroundImage: `url(${backImages[0].coverIamge})`}}>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SMART ESA' title='Leading startup and corporate accelerator in Lebanon' />
            {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
            
            <div className='button'>
            <Link to="/Programs">
              <button className='primary-btn'>
                VIEW PROGRAMS <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </Link>
              
              <Link to="/Apply">
              <button>
                APPLY NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section> )}
      <div className='margin'></div>
    </>
  )
}

export default Hero
