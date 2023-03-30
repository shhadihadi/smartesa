import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../../../dashboard/src/useFetch";
import "./methotolody.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from "@mui/icons-material/Edit";
// import Typography from '@mui/material/Typography';

function Methotology() {
  const {
    error,
    isPending,
    data: online,
  } = useFetch("http://localhost:8000/online");

  const handledelete = (id) => {
    fetch(`http://localhost:8000/online/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
    });
  };

  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <div className="datatable">
            <div className="datatableTitle">
              Add New ADMIN
              <Link to="/metho/new" className="link">
                Add New
              </Link>
            </div>

            <div className="mainmetho">
              {error && <div>{error}</div>}
              {isPending && <div>Loading...</div>}
              {online &&
                    online.slice(0).reverse().map((val) => (  // Call slice(0) to create a copy of the array
                  <div className="methmaidev" key={val.id}>
                    <div className="imgreight">
                      <img src={val.cover} alt="Cover" />
                    </div>
                    <div className="imgleft">
                      <img src={val.hoverCover} alt="Hover Cover" />
                    </div>
                    <h3>{val.courseName}</h3>
                    <p>{val.course}</p>
                    <div
                      className="fisrtdivedit"
                      onClick={() => handledelete(val.id)}
                    >
                      <Grid item xs={8}>
                        <DeleteIcon />
                      </Grid>
                      {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
                    </div>
                    <div className="seconddevdelet">
                    <Link to={`/MethoEdit/${val.id}`}>
                      <div className="hadiediticon">
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
    </>
  );
}

export default Methotology;
