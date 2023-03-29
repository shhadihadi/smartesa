import React from "react";
import useFetch from "../useFetch";

const HandleImg = () => {
  const {
    error,
    isPending,
    data:backImages,
  } = useFetch("http://localhost:8000/backImages");

  return (
    <>
    {backImages && backImages[1] && (
    <div
      className="left row imgAB"
      style={{ backgroundImage: `url(${backImages[3].coverIamge})`,
      backgroundPosition: "center center" }
      }
    ></div>
  )}
  </>
  );
};
export default HandleImg;
