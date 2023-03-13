import React, { useState } from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import {team} from "../../dummydata"
import useFetch from "../../components/useFetch";

const Blog = () => {

  const { error, isPending, data: SmartTalkHome } = useFetch('http://localhost:8000/SmartTalkHome');

  // extract the "Paragraphs" array from the first object in the "" array
  const paragraphs = SmartTalkHome && SmartTalkHome.length > 0 ? SmartTalkHome[0].Paragraphs : null;

  const [numPosts, setNumPosts] = useState(6);

  const loadMore = () => {
    setNumPosts(numPosts + 3); // Increase the number of posts to display by 3
  };


  const allPostsDisplayed = SmartTalkHome ? numPosts >= SmartTalkHome.length : false;

  return (
    <>

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
        <Back 
          title= {SmartTalkHome[0].title}
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