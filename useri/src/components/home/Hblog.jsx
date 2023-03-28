import React from "react";
import "../blog/blog.css";
import Heading from "../common/heading/Heading";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Hblog = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  {
    error && <div>{error}</div>;
  }
  {
    isPending && <div>Loading...</div>;
  }
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const postsToRender = blogs
    ? blogs.sort(
        (a, b) =>
          new Date(b.date.replace(/,/g, "")) -
          new Date(a.date.replace(/,/g, ""))
      )
    : [];

  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle="OUR BLOG" title="Recent From Blog" />
          <div className="containerB grid2">
            {postsToRender &&
              postsToRender.slice(0, 3).map((val) => (
                <div
                  key={val.id}
                  className="items shadow"
                  style={{ boxShadow: "  rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
                >
                  <div className="img">
                    <img src={val.cover[0]} alt="" className="blog-card-img" />
                  </div>
                  <div className="text">
                    <div className="admin flexSB">
                      <span>
                        <i className="fa fa-calendar-alt"></i>
                        <label htmlFor="">{val.date}</label>
                      </span>
                    </div>
                    <Link
                      to={`../Event/${val.id}`}
                      style={{ color: "rgb(42,98,147)" }}
                    >
                      {" "}
                      <h1>{val.title}</h1>
                    </Link>
                    <p>{val.paragraphs?.substring(0, 130) + "..."}</p>
                  </div>
                </div>
              ))}
            
          </div>
          <div className="text-center">
              <Link to={`../Events`} ><button className="load-more primary-btn" onClick={handleClick}>Show more</button></Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
