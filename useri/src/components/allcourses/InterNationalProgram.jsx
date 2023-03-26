import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";

import OnlineCourses from "./OnlineCourses";
import useFetch from "../../components/useFetch";
import Internationalcard from "./internationalCard";

const CourseHome = () => {
  const { error, isPending, data: internationaProgramHome } = useFetch('http://localhost:8000/internationaProgramHome');

  // extract the "Paragraphs" array from the first object in the "internationaProgramHome" array
  const paragraphs = internationaProgramHome ? internationaProgramHome[0].Paragraphs : null;

  return (
    <>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
        <Back 
          title= {internationaProgramHome[0].title}
          paragraphs={paragraphs} // pass the entire "Paragraphs" array as a prop
        />
      )}
      <Internationalcard />
      {/* <CoursesCard /> */}
      {/* <OnlineCourses /> */}
    </>
  )
}

export default CourseHome;