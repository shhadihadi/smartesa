//
import React from "react";
import "./international.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import useFetch from "../../useFetch";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";

import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";

import Programes from "./Programes";
import Intercard from "./cards/intercard";

const International = () => {
  const {
    error,
    isPending,
    data: internationaProgramHome,
  } = useFetch("http://localhost:8000/internationaProgramHome");

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />


        <div className="international">
          <div >
            <Grid container spacing={5}>
              {error && <div>{error}</div>}
              {isPending && <div>Loading...</div>}
              {internationaProgramHome &&
                internationaProgramHome.map((val) => (
                  <Grid item key={val.id} xs={12} md={12} lg={12}>
                    <Paper>
                      <CardHeader
                        action={
                          <IconButton>
                            {/* <DeleteOutlined /> */}
                            <Link to={`/international/${val.id}`}>
                              <EditOutlined />
                            </Link>
                          </IconButton>
                        }
                        title={val.title}

                        
                        //   subheader={val.Paragraph}
                      />

                      <h4>{val.Paragraphs?.split('\n').map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))} 
                        </h4>
                          {/* <div dangerouslySetInnerHTML={{ __html: val.Paragraphs }}></div> */}

                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>

        {/* <div className="details1">
          <Programes />
          <div></div>
        </div> */}
        <div className="hadiiternationalCard">
          
          <Intercard />

        </div>
       
      </div>
    </div>
  );
};

export default International;