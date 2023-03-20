
import React, { useState } from "react"
import useFetch from "../useFetch";

const NumPosts = () => {
const { data: blogs } = useFetch('http://localhost:8000/blogs');
const NumPosts = blogs? blogs.length:null;
return { NumPosts };
}
export default NumPosts