import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import useFetch from "../../useFetch.js";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

const List = () => {
  const {
    error,
    isPending,
    data: backImages,
  } = useFetch("http://localhost:8000/backImages");
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <Datatable/> */}
        <div className="forImageContainer">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {backImages &&
            backImages.map((val) => (
              <div className="displaymyImageHere">
                <div className="forTextBACKK">
                  <h3>{val.name}</h3>
                </div>
                <div className="forImageeBACKK">
                  {" "}
                  <img src={val.coverIamge} alt="" />
                </div>

                <Link to={`/updateMainPics/${val.id}`}>
                  <div className="forEDIITBACKK">
                    <Grid item xs={8}>
                      <EditIcon />
                    </Grid>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
