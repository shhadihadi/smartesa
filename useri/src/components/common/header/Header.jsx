import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useLocation } from "react-router-dom"

const Header = () => {
  const [click, setClick] = useState(false)
  const location = useLocation()

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li  className="MaxTrasform">
              {/* <Link to='/courses'>All Courses</Link> */}
                <Link to='/courses'>INTERNATIONAL PROGRAMS</Link>
              
            </li>
            <li className="smallTrasform">
              {/* <Link to='/courses'>All Courses</Link> */}
                <Link  to='/courses'>PROGRAMS</Link>
              
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>SmarTalk</Link>
            </li>
            <li className="displayourCom">
              <Link to='/pricing'>Our Community</Link>
            </li>
            <li className="nondisplayourCom">
              <Link to='/pricing'>Community</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='getcertibutton'> <Link to='/' className="apply">Apply Now</Link></div>
            <div className='getcertibuttonsmall'> {location.pathname.split("/")[1].toUpperCase()}</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
