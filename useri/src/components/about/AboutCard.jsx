import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import useFetch from "../useFetch";
import  HandleImg  from "./HandleImg";

const AboutCard = () => {
  const {
    error,
    isPending,
    data: homeAbout,
  } = useFetch("http://localhost:8000/homeAbout");

  const paragraphs = homeAbout ? homeAbout[0].Paragraphs : null;
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
        <HandleImg/> 
          {/* <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div> */}
          
          <div className="right row">
            <div className="whatever">
              <Heading title="ABOUT US" style={{ marginTop: "-100px" }} />
            </div>

            <div className="items">
              {error && <div>{error}</div>}
              {isPending && <div>Loading...</div>}
              {paragraphs &&
                paragraphs?.split("\n").map((line, index) => (
                  <div className="item flexSB">
                    
                    {/* <div className='img'>
                    <img src={val.cover} alt='' />
                  </div> */}
                    <div className="text">
                      <p key={index}>{line}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
