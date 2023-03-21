import React from "react"
import "./courses.css"
import useFetch from "../useFetch"
import { Link } from 'react-router-dom'

const CoursesCard = () => {
  const { error, isPending, data: coursesCard } = useFetch('http://localhost:8000/coursesCard')
  return (
    <> <section className='coursesCard'> <div className='container grid2HadiCard'>
      
        
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { coursesCard &&
        
          coursesCard.map((val) => (
            <div className='items' key={coursesCard.id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate '>
                    <h3>TARGET :
                    <span>Entrepreneurs with an idea</span></h3>
                    <h3>SECTOR :
                    <span>{val.SECTOR}</span></h3>
                    <h3>OBJECTIVE :
                    <span>{val.OBJECTIVE}</span></h3>
                    <h3>DURATION:
                    <span>{val.DURATION}</span></h3>
                    <h3>TYPE:
                    <span>{val.TYPE}</span></h3>
                    
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((source) => (
                      <>
                        <div className='box'>
                          <div className='dimg'  >
                            {/* <img src={`../../../public/${courTeachers.index}`} alt='' ></img> */}
                            <img src={source} />
                           
                          </div>
                          
                        
                        </div>
                      
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
              {/* {val.text.map((p) => 
              ( <h3>{p.slice(0, 150)+'...'}</h3> ))} */}
              <h3>{val.text.slice(0, 150)+'...'}</h3>
                  


              </div>
              <Link to={`/coursesCard/${val.id}`}>
                {/* <div className="buttonDown"> */}
              <button className='outline-btn'>KNOW MORE !</button>
              {/* </div> */}
              </Link>
            </div>
          ))}

</div>
      </section>
    </>
  )
}

export default CoursesCard
