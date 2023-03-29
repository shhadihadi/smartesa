import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import useFetch from '../../useFetch';
import './allinone.scss';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

function Allinone() {
  const { error, isPending, data: testimonal } = useFetch('http://localhost:8000/testimonal')
  const handledelete = (id) => {
    fetch(`http://localhost:8000/testimonal/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
    });
  };
  return (
    <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar />
         <h2>Teams</h2>
          <div className="datatable">
          <div className="datatableTitle">
              Add New ADMIN
              <Link to="/team/new" className="link">
                Add New
              </Link>
            </div>
            
           <div className="allnavsinonehadi">  
          { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { testimonal &&
        
        testimonal.map((val) => (
            <div className="cardofourTeam">
              <div className="firstForImage">
              <img src={val.cover} alt='' />
              </div>
              <div className="ForInfoTeamss">
              <div className="MasterTextData">
                <div className="namePfTeam">
                  <p>{val.name}</p>
                </div>
                <div className="JobnamePfTeam">
                <p>{val.post}</p>
                </div>
              </div>
              <div className="AllInfoTeams">
                {/* <p>{val.desc}</p> */}
                <div dangerouslySetInnerHTML={{ __html: val.desc }}></div>
              </div>
              </div>
              
              <div className="editANDdELETEtEAM"> 
              <div className="deletoptioncardcomunuty" style={{paddingLeft:"8px"}} onClick={() => handledelete(val.id)} >
            
            <Grid item xs={8}>
                          <DeleteIcon  />
                        </Grid>
                        
            </div>
            <Link to={`/updateTeam/${val.id}`}>
            <div className="editoptioncardcomunuty"  style={{paddingLeft:"8px"}}>
            <Grid item xs={8}>
                          <EditIcon />
                        </Grid>
                        </div>
                        </Link>
          
          
          </div>

            </div>
        ))}
            
          </div>
          </div>
          </div>
          </div>
  )
}

export default Allinone