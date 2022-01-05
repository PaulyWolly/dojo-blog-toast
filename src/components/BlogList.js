/* eslint-disable no-unused-vars */
// (1) const BlogList = (props) => {
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
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
   );
}

export default BlogList;