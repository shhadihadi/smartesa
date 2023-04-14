import useFetch from "../../useFetch";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {
  ImageListItem,
  ImageList,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

import { useState, useEffect } from "react";

const Articles = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");
  
  const [blogList, setBlogList] = useState(blogs); // add useState hook

  useEffect(() => {
    setBlogList(blogs); // update blogList state when blogs data changes
  }, [blogs]);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedBlogList = blogList.filter((blog) => blog.id !== id); // remove deleted blog from state
      setBlogList(updatedBlogList); // set updated state
      
    });
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Articles
        <Link to="/addArticles" className="link">
          Add New
        </Link>
      </div>
      <ImageList sx={{ width: "100%", gap: 40, maxHeight: 500 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div" background="red">
            Events{" "}
          </ListSubheader>
        </ImageListItem>
        {blogList &&
          blogList.map((item) => (
            <ImageListItem key={item.cover}>
              <img
                src={`${item.cover}`}
                srcSet={`${item.cover}`}
                alt={item.title}
                loading="lazy"
                sx={{ width: "80%" }} // add this
              />
              <IconButton background=" #3f4580">{item.date}</IconButton>
              <ImageListItemBar
                title={item.title}
                subtitle={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <DeleteOutlined onClick={() => handleDelete(item.id)} />
                    <Link to={`/articleEdit/${item.id}`}>
                      <EditOutlined />
                    </Link>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
};

export default Articles;
