import React from "react";
import "./ProgramId.scss";
import useFetch from "../useFetch";
import BackID from "../common/back/backByID";
import { useParams } from "react-router-dom";

function InternationalId() {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: Programs,
  } = useFetch(`http://localhost:8000/coursesCard/${id}`);
  const paragraphs = Programs ? Programs.text : null;
  return (
    <>
      {paragraphs && (
        <BackID title={Programs.coursesName} paragraphs={paragraphs} />
      )}
      <div className="maincomunitycarddivId">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {Programs && (
          <div className="fathercontainercardId" key={id}>
            <div className="headercomunityId">
              <div className="cardourcomunityrowdisplayId">
                <div className="firstcontentcomunityId">
                  <h4>{Programs.coursesName}</h4>
                  <h4>Target: {Programs.TARGET}</h4>
                </div>
                <div className="secondcomuitydivId">
                  <div>
                    {Programs.courTeacher.map((source) => (
                      <>
                        <img className="imgSc" src={source} />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="nonamedisplayId">
              <div className="textInter">
                <p style={{ marginLeft: "0%" }}>
                  <strong>Objective:</strong> {Programs.OBJECTIVE}
                </p>
                <p style={{ marginLeft: "0%" }}>
                  <strong>Sector:</strong> {Programs.SECTOR}
                </p>
                <p style={{ marginLeft: "0%" }}>
                  <strong>Duration:</strong> {Programs.DURATION}
                </p>
                <p style={{ marginLeft: "0%" }}>
                  <strong>Type:</strong> {Programs.TYPE}
                </p>
                <br />
                {/* <p>
                  {Programs.AboutALL.split("\n").map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </p> */}
                <div dangerouslySetInnerHTML={{ __html: Programs.AboutALL }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default InternationalId;
