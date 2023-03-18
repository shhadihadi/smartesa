import './Community.css';
import { useParams } from "react-router-dom";
import React from "react"
import BackID from "../../common/back/backByID"
import useFetch from "../../useFetch";
import Heading from "../../common/heading/Heading";

const Community = () => {
    const { id } = useParams();
    const {
    data: community,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/ourcommunity/${id}`);
  const paragraphs = community ? community.paragraphs : null;
  const desc = community ? community.desc : null;
  
  return (
    <>
    {paragraphs && (
        <BackID 
            paragraphs={paragraphs}
        />
      )}

      {community && (
      <section className='eventHome' id='blog'>
        <Heading  title={community.name} style={{paddingTop: "100px",}}  />
        <div className='container flexSBE medDiv'>
          <div className='left row'>
            <img src={community.nb} alt='' />
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
                    <div className='text' style={{ whiteSpace: "pre-line" }}>
                      
                      <p key={index}>
                     
                        {/* {paragraph} */}
                        {paragraph.split("\n").map((line, index) => (
                           <React.Fragment key={index} >
                          {line}
                          <br />
                        </React.Fragment>
                          ))}
                      </p>
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

export default Community;