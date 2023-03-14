import React from 'react'
import useFetch from '../../../useFetch'
import EditIcon from '@mui/icons-material/Edit';
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from '@mui/material/Icon';

function Intercard() {
  const { error, isPending, data: coursesCard } = useFetch('http://localhost:8000/coursesCard')

  const handledelete = (id) => {
    fetch(`http://localhost:8000/coursesCard/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
    });
  };
  return (
    <>
     <Icon baseClassName="fas" className="fa-plus-circle" fontSize="small" />
    <div className='intercardallinone'>
    
      

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { coursesCard &&
        
        coursesCard.map((val) => (
      <div className="suball"  key={val.id}>
        <div className="fisrtupone">
        <div className='imggetted'>
                    <img src={val.cover} alt='' />
                  </div>
          <h4>{val.coursesName}</h4>
          <div className="optiontoolsabcdef">
            <div className="editoptioncard">
            <Grid item xs={8}>
                          <EditIcon />
                        </Grid>
            </div>
            <div className="deletoptioncard" onClick={() => handledelete(val.id)}>
            {/* <Grid item xs={8}> */}
                          <DeleteIcon  />
                        {/* </Grid> */}
            </div>
            
          </div>
          
        </div>
        <div className="imgproviderseen">
        {val.courTeacher.map((source) => (
                      <>
                      
                    
                            <img src={source} />
                           
                          
                      
                      </>
                    ))}
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
    </>
  )
}

export default Intercard
