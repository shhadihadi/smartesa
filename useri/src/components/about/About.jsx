import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import HAbout from "../home/HAbout"
import OnlineCourses from "../allcourses/OnlineCourses"
import useFetch from "../../components/useFetch";

const About = () => {

  const { error, isPending, data: AboutUsHome } = useFetch('http://localhost:8000/AboutUsHome');

  // extract the "Paragraphs" array from the first object in the "AboutUsHome" array
  const paragraphs = AboutUsHome ? AboutUsHome[0].Paragraphs : null;
  return (
    <>
          { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
        <Back 
          title= {AboutUsHome[0].title}
          paragraphs={paragraphs} 
        />
      )}
      <AboutCard />
      <OnlineCourses />
    </>
  )
}

export default About
