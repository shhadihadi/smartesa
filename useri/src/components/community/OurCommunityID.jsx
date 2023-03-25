import React from "react";
import "./price.css";
import useFetch from "../useFetch";

const OurCommunityID = () => {
  const { error, isPending, data: ourcommunity } = useFetch(
    "http://localhost:8000/ourcommunity"
  );

  return (
    <section style={{ marginBottom: "20px" }}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {ourcommunity &&
        ourcommunity.map((val) => (
          <div className="parS" key={val.id}>
            <div className="itemP">
                <h2> {val.nb} {val.title}</h2>
              
                {val.paragraphs?.split("\n").map((line, index) => (
                   <React.Fragment key={index} >
                  {line}
                  <br />
                </React.Fragment>
                  ))}
            
            </div>
            {val.communityimg.length > 0 && (
                <div className="image-container">
                  
                    {val.communityimg.map((img, index) => (
                        <img key={index} src={img} alt="" />
                    ))}
                </div>
            )}
          </div>
        ))}
    </section>
  );
};

export default OurCommunityID;

