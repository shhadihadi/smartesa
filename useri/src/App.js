import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import InterNationalProgram from "./components/allcourses/InterNationalProgram"
import Team from "./components/team/Blog"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import CourseCardId from "./components/allcourses/coursecartById/coursecardid"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element ={<Home />} />
          <Route exact path='/about' element ={< About />} />
          <Route exact path='/courses' element ={< InterNationalProgram />} />
          <Route exact path='/team' element ={< Team />} />
          <Route exact path='/pricing' element ={<Pricing />} />
          <Route exact path='/events' element ={<Blog />} />
          <Route exact path='/contact' element ={<Contact />} />
          <Route exact path="/coursesCard/:id" element ={<CourseCardId />} />
          
        </Routes>
        <Footer />
      </Router>
      
    </>
  )
}

export default App
