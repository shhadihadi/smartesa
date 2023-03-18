import React, { useState } from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import {blog} from "../../dummydata"
import useFetch from "../useFetch";

const Blog = () => {
  const { error, isPending, data: EventsHome } = useFetch('http://localhost:8000/EventsHome');

  // extract the "Paragraphs" array from the first object in the "EventsHome" array
  const paragraphs = EventsHome ? EventsHome[0].Paragraphs : null;
  const [numPosts, setNumPosts] = useState(6);

  const loadMore = () => {
    setNumPosts(numPosts + 3); // Increase the number of posts to display by 3
  };

  const allPostsDisplayed = numPosts >= blog.length;

  return (
    <>
    { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
        <Back 
          title= {EventsHome[0].title}
          paragraphs={paragraphs} // pass the entire "Paragraphs" array as a prop
        />
      )}
      <section className='blog padding'>
        <div className="btn-Cent">
          <div className='container grid2'>
            <BlogCard numPosts={numPosts} />
          </div>
          {!allPostsDisplayed && (
            <div className="text-center">
              <button className="load-more primary-btn" onClick={loadMore}>Load more</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog