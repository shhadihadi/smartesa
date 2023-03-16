import './Event.css';
import { useParams } from "react-router-dom";
import React, { useState } from "react"
import BackID from "../../common/back/backByID"
import useFetch from "../../useFetch";
import Heading from "../../common/heading/Heading"

const Event = () => {
    const { id } = useParams();
    const {
    data: blogs,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const paragraphs = blogs ? blogs.paragraphs : null;
  const desc = blogs ? blogs.desc : null;
  return (
    <>
    {paragraphs && (
        <BackID title={blogs.title}
            paragraphs={paragraphs}
        />
      )}

      {blogs && (
      <section className='eventHome' id='blog'>
        <Heading  title={blogs.title} style={{paddingTop: "100px"}}  />
        <div className='container flexSBE'>
          <div className='left row'>
            <img src={blogs.cover} alt='' />
          </div>
          <div className='right row'>            
            <div className='items'>
            { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { desc && 
              desc.map((paragraph, index) => (
              
                  <div className='item flexSB'>
                    {/* <div className='img'>
                      <img src={val.cover} alt='' />
                    </div> */}
                    <div className='text'>
                      
                      <p key={index}>{paragraph}</p>
                    </div>
                  </div>
                
              ))}
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default Event;
