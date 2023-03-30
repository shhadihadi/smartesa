import React,{useState} from "react";
import "./ProgramId.scss";
import useFetch from "../useFetch";
import BackID from "../common/back/backByID";
import { useParams } from "react-router-dom";

function ImagePopup({ selectedImage, setSelectedImage }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={() => setSelectedImage(null)}>
          &times;
        </span>
        <img src={selectedImage} alt="not showing" />
      </div>
    </div>
  );
}

function InternationalId() {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: Programs,
  } = useFetch(`http://localhost:8000/coursesCard/${id}`);
  const paragraphs = Programs ? Programs.text : null;
  const [selectedImage, setSelectedImage] = useState(null);

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
                <div
                  dangerouslySetInnerHTML={{ __html: Programs.AboutALL }}
                ></div>
              </div>
              <div className="flexIT">
              {Programs.detailsimg.map((imgd, index) => (
                <div key={index} onClick={() => setSelectedImage(imgd)}>
                  <img src={imgd} alt="not showing" className="small-image" />
                </div>
              ))}
              </div>
              {selectedImage && (
                <ImagePopup
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default InternationalId;
