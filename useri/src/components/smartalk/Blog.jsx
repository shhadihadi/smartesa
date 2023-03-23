import React, { useState } from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import useFetch from "../../components/useFetch";
import NumPosts from "./Numposts";

const Blog = () => {

  const { error, isPending, data: SamartTalkHome } = useFetch('http://localhost:8000/SamartTalkHome');

  // extract the "Paragraphs" array from the first object in the "" array
  const paragraphs = SamartTalkHome && SamartTalkHome.length > 0 ? SamartTalkHome[0].Paragraphs : null;

  const [numPosts, setNumPosts] = useState(6);

  const loadMore = () => {
    setNumPosts(numPosts + 3); // Increase the number of posts to display by 3
  };

  const { NumPosts: allPostsDisplayed } = NumPosts(); 
  //const allPostsDisplayed = SamartTalkHome ? numPosts >= SamartTalkHome.length : false;

  return (
    <>

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { paragraphs && (
        <Back 
          title= {SamartTalkHome[0].title}
          paragraphs={paragraphs} // pass the entire "Paragraphs" array as a prop
        />
      )}
      <section className='blog padding'>
        <div className="btn-Cent">
          <div className='container grid2'>
            <BlogCard numPosts={numPosts} />
          </div>
          {allPostsDisplayed>numPosts && (
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