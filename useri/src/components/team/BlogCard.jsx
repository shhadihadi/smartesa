import React, { useState } from "react";
import useFetch from "../useFetch"

const VideoPopup = ({ videoUrl, onClose }) => {
  const videoId = videoUrl.split('v=')[1];
  const videoUrlWithParams = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="video-popup">
      <div className="video-container">
        <iframe
          src={videoUrlWithParams}
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

const BlogCard = ({ numPosts }) => {

  const { error, isPending, data: team } = useFetch('http://localhost:8000/team')

  { error && (<div>{ error }</div>) }
  { isPending && (<div>Loading...</div>)}
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const postsToRender = team ? team.slice(0, numPosts) : [];

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };
  
  const handleClosePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      {postsToRender && postsToRender.map((val) => (     
       <div
          key={val.id} 
          className="items shadow"
          style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
     
          <div className="img">
          <button
            className="blog-card-img-btn "
            onClick={() => handleVideoClick(val.cover)}
          >
            <img src={val.thumbnail} alt="" className="blog-card-img" />
          </button>

          </div>
          <div className="text">
            <h1>{val.name}</h1>
            <div className="admin flexSB">
              <span>
                <i className="fa fa-calendar-alt"></i>
                <label htmlFor="">{val.date}</label>
              </span>
            </div>
            <p className="paddi">{val.work}</p>
          </div>
        </div>
      ))}
      {selectedVideo && (
        <VideoPopup videoUrl={selectedVideo} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default BlogCard;

