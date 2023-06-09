import React from "react";

import useFetch from "../../useFetch";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@mui/material";

import { DeleteOutlined, Edit, EditOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import {
  ImageListItem,
  ImageList,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";

const SmartVideo = () => {
  const {
    error,
    isPending,
    data: team,
  } = useFetch("http://localhost:8000/team");
  console.log(team);

  const handledelete = (id) => {
    fetch(`http://localhost:8000/team/${id}`, {
      method: "DELETE",
    }).then(() => {
      // history.push('/');
      window.location.reload();
    });
  };

  return (
    <div className="datatable">
    <div className="datatableTitle">
      Add New Video
      <Link to="/createVideo" className="link">
        Add New
      </Link>
    </div>
    
      <Grid container spacing={3}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {team &&
          team.map((val) => (
            <Grid item key={val.id} background={ "rgb(107, 190, 196)"} xs={12} md={6} lg={4} borderRadius={20}  box-shadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}>
              <Paper>
                <CardHeader
                  action={
                    <IconButton>
                      <DeleteOutlined onClick={() => handledelete(val.id)} />
                      <Link to={`/smartEditVideo/${val.id}`}>
                        <EditOutlined />
                      </Link>
                    </IconButton>
                  }
                  title={val.title}

                  //   subheader={val.Paragraph}
                />
                <div className="imgreight">
                  <img src={val.thumbnail} alt="Cover" />
                </div>
                <div>
                  <h5>{val.date}</h5>
                  <h6>{val.cover}</h6>
                </div>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default SmartVideo;
