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
//import CourseCardId from "./components/allcourses/coursecartById/coursecardid"
import ProgramsId from "./components/allcourses/ProgramsById"
import Event from "./components/byID/event/Event"
import MultiStepForm from "./components/Apllynow/MultiStepForm"
//import Program from "./components/allcourses/internationalCard"

//import NCommunity from "./components/community/NO"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element ={<Home />} />
          <Route  path='/about' element ={< About />} />
          <Route  path='/Programs' element ={< InterNationalProgram />} />
          <Route  path='/SmarTalk' element ={< Smartalk />} />
          <Route  path='/OurCommunity' element ={<Community />} />
          <Route  path='/events' element ={<Blog />} />
          <Route  path='/contact' element ={<Contact />} />
          <Route exact path="/Event/:id" element ={<Event />} />
          <Route exact  path='/Apply' element ={<MultiStepForm />} />
          <Route  path="/Programs/:id" element ={<ProgramsId />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  )
}

export default App
