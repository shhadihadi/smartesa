import React from 'react'
import './commuinty.scss'
import useFetch from "../../useFetch"
import EditIcon from '@mui/icons-material/Edit';
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from 'react-router-dom';

function Comunitycards() {
  const {  error,isPending, data: online,} = useFetch("http://localhost:8000/price");

  const handledelete = (id) => {
    fetch(`http://localhost:8000/price/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
    });
  };
  return (
    <div>
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
                online.map((val) => (
        <div className="fathercontainercard" key={val.id}>
          <div className="headercomunity">
          <div className="cardourcomunityrowdisplay">
          <div className="firstcontentcomunity">
            <h4>{val.price}</h4>
            <h4>{val.name}</h4>
          </div>
          <div className="secondcomuitydiv">
            <p>{val.desc}</p>
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
          {val.communityimg.map((source) => (
                      <>
                      
                    
                            <img src={source} />
                           
                          
                      
                      </>
                    ))}
          </div> 
          
          </div>
              ))}
      </div>
            
      
      
    </div>
  )
}

export default Comunitycards
