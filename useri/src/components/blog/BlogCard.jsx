import React from "react"
import useFetch from "../useFetch"

const BlogCard = ({ numPosts }) => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  { error && (<div>{ error }</div>) }
  { isPending && (<div>Loading...</div>)}
  const postsToRender = blogs ? blogs.slice(0, numPosts) : [];

  return (
    <>
      {postsToRender && postsToRender.map((val) => (
        <div 
        key={val.id} 
        className='items shadow' 
        style={{boxShadow:'  rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
          <div className='img'>
            <img src={val.cover} alt=''className='blog-card-img' />
          </div>
          <div className='text'>
            {/* <div className='admin flexSB'>
              <span>
                <i className='fa fa-user'></i>
                <label htmlFor=''>{val.type}</label>
              </span>
              <span>
                <i className='fa fa-calendar-alt'></i>
                <label htmlFor=''>{val.date}</label>
              </span>
              <span>
                <i className='fa fa-comments'></i>
                <label htmlFor=''>{val.com}</label>
              </span>
            </div> */}
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
        </div>
      ))
      }
    </>
  )
}

export default BlogCard
