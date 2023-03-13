import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../../../dashboard/src/useFetch";
import "./methotolody.css";
import { Link } from "react-router-dom";

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
          <Navbar />{" "}
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
              online.map((val) => (
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
                    <i className="fa-solid fa-trash"></i>
                  </div>

                  <div className="seconddevdelet">
                    <Link to={`/MethoEdit/${val.id}`}>
                      <i className="fa-solid fa-pen-to-square"></i>
                      fyugiyou90i-o=
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
