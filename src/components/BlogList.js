/* eslint-disable no-unused-vars */
// (1) const BlogList = (props) => {

import { Link } from "react-router-dom";

// (2) const BlogList = ({ blogs, title }) => {
  const BlogList = ({ blogs, title, handleDelete }) => {

  // props for (1)
  // const blogs = props.blogs; // array of items from Home.js
  // const title = props.title; // title 'prop' pulled from Home.js
  // for (2) you do not need to list out const props here. (2) is a 'short cut'

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </Link>

        </div>
      ))}
    </div>
   );
}

export default BlogList;

// Blog endpoints @ http://localhost:8000
// /blogs [GET] = Fetch ALL blogs
// /blogs/{id} [GET] Fetch a single blog
// /blogs [POST] Add a new blog
// /blogs/{id} [DELETE] Delete a blog