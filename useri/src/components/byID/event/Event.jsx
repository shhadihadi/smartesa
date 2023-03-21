import './Event.css';
import { useParams } from "react-router-dom";
import React from "react"
import BackID from "../../common/back/backByID"
import useFetch from "../../useFetch";
import Heading from "../../common/heading/Heading";

//import JSON from 'react-router-dom';

const Event = () => {
    const { id } = useParams();
    const {
    data: blogs,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const paragraphs = blogs ? blogs.paragraphs : null;
  const desc = blogs ? blogs.desc : null;
  const cover = blogs ? blogs.cover : null;
  return (
    <>
    {paragraphs && (
        <BackID title={blogs.title}
            paragraphs={paragraphs}
        />
      )}

      {blogs && (
      <section className='eventHome' id='blog'>
        <Heading  title={blogs.title} style={{paddingTop: "100px",}}  />
        <div className='container flexSBE medDiv'>
          <div className='left row'>
            {cover && cover.map((image, index) => (
                <img key={index} src={image} alt="" />
              ))}
          </div>
          <div className='right row'>            
            <div className='items'>
              { error && <div>{ error }</div> }
              { isPending && <div>Loading...</div> }
              

                  <div className='item flexSB'>
                    <div className='text' style={{ whiteSpace: "pre-line" }}>                      
                      <p >
                        {desc.split("\n").map((line, index) => (
                           <React.Fragment key={index} >
                          {line}
                          <br />
                        </React.Fragment>
                          ))}
                      </p>
                    </div>
                  </div>                
              
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default Event;
