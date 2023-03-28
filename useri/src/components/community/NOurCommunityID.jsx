import { React, useState } from "react";
import Slider from "react-slick";
import "./Nour.css";
import useFetch from "../useFetch";
// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return <div></div>;
}

function NOurCommunityID() {
  const {
    error,
    isPending,
    data: ourcommunity,
  } = useFetch("http://localhost:8000/ourcommunity");

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, index) => (
      <div
        className={index === slideIndex ? "dot dot-active" : "dot"}
        onClick={() => setSlideIndex(index)}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <section style={{ marginBottom: "20px" }}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {ourcommunity &&
        ourcommunity.map((val) => (
          <div className="parS" key={val.id}>
            <div className="itemP">
              <h2>
                {" "}
                {val.nb} {val.title}
              </h2>

              {val.paragraphs &&
                val.paragraphs?.split("\n").map((line, index) => (
                  <p key={index}>
                    {line}
                    <br />
                  </p>
                ))}
            </div>
            {val.communityimg && val.communityimg.length > 0 && (
              <div style={{ marginTop: "80px" }}>
                {/* <h2 className="header">Modern React Carusel</h2> */}
                <div className="slider">
                  <Slider {...settings}>
                    {val.communityimg.map((img, index) => (
                      <div
                        className={`${
                          index === slideIndex ? "slide slide-active" : "slide"
                        } new-class`}
                        style={{ backgroundColor: "red", color: "white" }}
                        key={index}
                      >
                        <img src={img} alt="" className="shadowBI" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}

export default NOurCommunityID;
