import React, { useState } from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import "./blog.css";
import useFetch from "../useFetch";
import NumPosts from "./numposts";

const Blog = () => {
  const { error, isPending, data: EventsHome } = useFetch('http://localhost:8000/EventsHome');

  const paragraphs = EventsHome ? EventsHome[0].Paragraphs : null;
  const [numPosts, setNumPosts] = useState(6);

  const loadMore = () => {
    setNumPosts(numPosts + 3);
  };

  const { NumPosts: totalNumPosts } = NumPosts(); // get the NumPosts value from the returned object

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {paragraphs && (
        <Back title={EventsHome[0].title} paragraphs={paragraphs} />
      )}
      <section className="blog padding">
        <div className="btn-Cent">
          <div className="container grid2">
            <BlogCard numPosts={numPosts} />
          </div>
          {/* check if there are more posts to display */}
          {totalNumPosts > numPosts && (
            <div className="text-center">
              <button className="load-more primary-btn" onClick={loadMore}>
                Load more
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
