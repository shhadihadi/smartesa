import React from "react"
import useFetch from "../useFetch"
import { Link } from 'react-router-dom'


const BlogCard = ({ numPosts }) => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  { error && (<div>{ error }</div>) }
  { isPending && (<div>Loading...</div>)}
  const postsToRender = blogs ? blogs.sort((a, b) => new Date(b.date.replace(/,/g, '')) - new Date(a.date.replace(/,/g, ''))).slice(0, numPosts) : [];


  return (
    <>
      {postsToRender && postsToRender.map((val) => (
        <div 
        key={val.id}
        className='items shadow' 
        style={{boxShadow:'  rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
          <div className='img'>
            <img src={val.cover[0]} alt=''className='blog-card-img' />
          </div>
          <div className='text'>
             <div className='admin flexSB'>
              <span>
                <i className='fa fa-calendar-alt'></i>
                <label htmlFor=''>{val.date}</label>
              </span>
            </div> 
            <Link to={`../Event/${val.id}`} style={{ textDecoration: "none" }}> <h1>{val.title}</h1></Link>
            <p>{val.paragraphs?.substring(0,130) + '...'}</p>
          </div>
        </div>
      ))
      }
    </>
  )
}

export default BlogCard
