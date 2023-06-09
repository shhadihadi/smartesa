import React from "react";
import "./International.scss";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

function Internationalcard() {
  const {
    error,
    isPending,
    data: Programs,
  } = useFetch("http://localhost:8000/coursesCard");
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div className="maincomunitycarddiv" >
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {Programs &&
        Programs.slice().reverse().map((val) => (
          <Link to={`../Programs/${val.id}`} key={val.id} style={{ textDecoration: "none" }} onClick={handleClick}>
            <div className="fathercontainercard" key={val.id}>
              <div className="headercomunity">
                <div className="cardourcomunityrowdisplay">
                  <div className="firstcontentcomunity">
                    <h4>{val.coursesName}</h4>
                    <h4>Target: {val.TARGET}</h4>
                  </div>
                  <div className="secondcomuitydiv">
                    <div>
                      {val.courTeacher.map((source) => (
                        <>
                          <img className="imgSc" src={source} />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="nonamedisplay">
                <div className="textInter">
                  <p style={{ marginLeft: "0%" }}>
                    <strong>Objective:</strong> {val.OBJECTIVE}
                  </p>
                  <p style={{ marginLeft: "0%" }}>
                    <strong>Sector:</strong> {val.SECTOR}
                  </p>
                  <p style={{ marginLeft: "0%" }}>
                    <strong>Duration:</strong> {val.DURATION}
                  </p>
                  <p style={{ marginLeft: "0%" }}>
                    <strong>Type:</strong> {val.TYPE}
                  </p>
                  <span><div dangerouslySetInnerHTML={{ __html: val.text }}></div></span>
                  <span><div>
                      {val.detailsimg.map((imgd) => (
                        <>
                          <img className="imgSc" src={imgd} />
                        </>
                      ))}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
export default Internationalcard;
