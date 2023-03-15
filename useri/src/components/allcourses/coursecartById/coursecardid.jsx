import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import "./cousecardid.css";

function CourseCardId() {
  const { id } = useParams();
  const {
    data: coursesCard,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/coursesCard/${id}`);

  return (
    <div className="fullimg">
      <div className="imageid">
        <div></div>
      </div>
      <div className="container">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {coursesCard && (
          <div className="backlayoutscreen">
            <div className="coursecadidFormId">
              <h1 style={{ marginLeft: "-40px" }}>{coursesCard.coursesName}</h1>
            </div>
            <div className="proportyA">
              {/* <div className="newrowhadi"> */}
              <h3>TARGET:</h3>
              <p>{coursesCard.TARGET}</p>
              {/* </div> */}
              {/* <div className="newrowhadi"> */}
              <h3>SECTOR:</h3>
              <p>{coursesCard.SECTOR}</p>
              <h3>OBJECTIVE:</h3>
              <p>{coursesCard.OBJECTIVE}</p>
              <h3>DURATION:</h3>
              <p>{coursesCard.DURATION}</p>
              <h3>TYPE:</h3>
              <p>{coursesCard.TYPE}</p>
              {/* </div> */}
            </div>

            <div className="proportyB">
              {coursesCard.courTeacher.map((source, index) => (
                <div className="imginflexMode">
                  <img src={source} alt={`Partner ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="texttoUpp">
            {coursesCard.text.map((p, index) => (
  <p key={index}>
    {p.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </p>
))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCardId;
