import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import InterNationalProgram from "./components/allcourses/InterNationalProgram"
import Smartalk from "./components/smartalk/Blog"
import Community from "./components/community/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import CourseCardId from "./components/allcourses/coursecartById/coursecardid"
import Event from "./components/byID/event/Event"
// import Community from "./components/byID/ourcommunity/Community"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element ={<Home />} />
          <Route  path='/about' element ={< About />} />
          <Route  path='/PROGRAMS' element ={< InterNationalProgram />} />
          <Route  path='/SmarTalk' element ={< Smartalk />} />
          <Route  path='/OurCommunity' element ={<Community />} />
          <Route  path='/events' element ={<Blog />} />
          <Route  path='/contact' element ={<Contact />} />
          <Route  path="/coursesCard/:id" element ={<CourseCardId />} />
          <Route exact path="/Event/:id" element ={<Event />} />
          {/* <Route exact path="/OurCommunity/:id" element ={<Community/>} />
           */}
        </Routes>
        <Footer />
      </Router>
      
    </>
  )
}

export default App
