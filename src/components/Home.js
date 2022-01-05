/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import ToastComponent from "../ToastComponent";
import BlogList from "./BlogList";
/* eslint-disable no-unused-vars */
import useFetch from './useFetch';


const Home = () => {
const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')


  return (

    <div className="home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" handleDelete={handleDelete} />} */}

    </div>

  );
}

export default Home;