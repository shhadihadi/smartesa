import React from 'react'
import useFetch from '../../../useFetch'

function Intercard() {
  const { error, isPending, data: coursesCard } = useFetch('http://localhost:8000/coursesCard')
  return (
    <div className='intercardallinone'>

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { coursesCard &&
        
        coursesCard.map((val) => (
      <div className="suball">
        <div className="fisrtupone">
        <div className='imggetted'>
                    <img src={val.cover} alt='' />
                  </div>
          <h4>{val.coursesName}</h4>
          <div className="optiontoolsabcdef">
            <p>d</p>
            <p>e</p>
          </div>
          
        </div>
        <div className="imgproviderseen">
        {/* {val.courTeacher.map((source) => (
                      <>
                      
                    
                            <img src={source} />
                           
                          
                      
                      </>
                    ))} */}
        </div>
        <div className="ditailsAhadi">
          <div className="listdathadi"  >
            <div className="flextohaveOnLine">
          <h3>TARGET: </h3>
          <p>{val.TARGET}</p>
          </div>
          <div className="flextohaveOnLine">
          <h3>SECTOR: </h3>
          <p>{val.SECTOR}</p>
          </div>
          <div className="flextohaveOnLine">
          <h3>TYPE: </h3>
          <p>{val.TYPE}</p>
          </div>
          </div>
          <div className="listdathadi">
          <div className="flextohaveOnLine">
          <h3>OBJECTIVE: </h3>
          <p>{val.OBJECTIVE}</p>
          </div>
          <div className="flextohaveOnLine">
          <h3>DURATION: </h3>
          <p>{val.DURATION}</p>
          </div>
        
          </div>
        </div>
        <div className="abouttextinine">
          
            {val.text.map((p) => 
              ( <p>{p}</p> ))}
              
        </div>

        
      </div> 
      ))}

      
      
    </div>
  )
}

export default Intercard
