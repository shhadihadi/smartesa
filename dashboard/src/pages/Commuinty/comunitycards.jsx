import React from 'react'
import './commuinty.scss'
import useFetch from "../../useFetch"
import EditIcon from '@mui/icons-material/Edit';
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from 'react-router-dom';

function Comunitycards() {
  const {  error,isPending, data: online,} = useFetch("http://localhost:8000/ourcommunity");

  const handledelete = (id) => {
    fetch(`http://localhost:8000/ourcommunity/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
    });
  };
  return (
    <div>
       <div className="datatable">
        <div className="datatableTitle">
              Add New Item
              
              <Link to="/createcom" className="link">
                <>
                Add New
                </>
              </Link>
            </div>
      <div className="maincomunitycarddiv">

      {error && <div>{error}</div>}
              {isPending && <div>Loading...</div>}
              {online &&
                online.slice().reverse().map((val) => (
        <div className="fathercontainercard" key={val.id}>
          <div className="headercomunity">
          <div className="cardourcomunityrowdisplay">
          <div className="firstcontentcomunity">
            <h4>{val.nb}</h4>
            <h4>{val.title}</h4>
          </div>
          <div className="secondcomuitydiv">

          {/* {val.paragraphs.map((p, index) => (
  <p key={index}>
    {p.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </p>
))} */}
  {/* {val.paragraphs?.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))} */}
    <div dangerouslySetInnerHTML={{ __html: val.paragraphs }}></div>

            {/* <p>{val.desc}</p> */}
          </div>
          <div className="proportiesdecs">
          <div className="deletoptioncardcomunuty" onClick={() => handledelete(val.id)}>
            
            <Grid item xs={8}>
                          <DeleteIcon  />
                        </Grid>
                        
            </div>
            <Link to={`/updateCommers/${val.id}`}>
            <div className="editoptioncardcomunuty">
            <Grid item xs={8}>
                          <EditIcon />
                        </Grid>
                        </div>
                        </Link>
          
          </div>
          </div>
          </div>
           <div className="nonamedisplay">
            <div className="image-container">
          {val.communityimg.map((source) => (
                      <>
                      
                    
                            <img src={source} />
                           
                          
                      
                      </>
                    ))}
                    </div>
          </div> 
          
          </div>
              ))}
      </div>
            
      </div>
      
    </div>
  )
}

export default Comunitycards
