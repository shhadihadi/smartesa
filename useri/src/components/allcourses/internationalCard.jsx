import React from "react";
import "./International.scss";
import useFetch from "../useFetch";
import Grid from "@mui/material/Grid";

function Internationalcard() {
  const {
    error,
    isPending,
    data: online,
  } = useFetch("http://localhost:8000/coursesCard");

  return (
    <div className="maincomunitycarddiv">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {online &&
        online.map((val) => (
          <div className="fathercontainercard" key={val.id}>
            <div className="headercomunity">
              <div className="cardourcomunityrowdisplay">
                <div className="firstcontentcomunity">
                  <h4>{val.coursesName}</h4>
                  <h4>{val.TARGET}</h4>
                </div>
                <div className="secondcomuitydiv">
                  {val.text?.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                <div className="proportiesdecs">
                  <div className="deletoptioncardcomunuty">
                    <Grid item xs={8}></Grid>
                  </div>
                  <div className="editoptioncardcomunuty">
                    <Grid item xs={8}></Grid>
                  </div>
                </div>
              </div>
            </div>
            <div className="nonamedisplay">
              <div className="image-container">
                {val.courTeacher.map((source) => (
                  <>
                    <img src={source} />
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Internationalcard;
