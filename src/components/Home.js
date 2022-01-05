import { useState } from "react"
import BlogList from "./BlogList";
/* eslint-disable no-unused-vars */

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Yoshi', id: 1},
    { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Mario', id: 2},
    //{ title: 'Web Dev top tips', body: 'lorem ipsum...', author: 'Paul', id: 3},
    { title: 'Welcome Party2', body: 'lorem ipsum...', author: 'Mario', id: 4},
    // { title: 'Mario\'s Welcome Party!', body: 'lorem ipsum...', author: 'Mario', id: 5},
    // { title: 'Do the Dance!!', body: 'lorem ipsum...', author: 'Mario', id: 6},
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);

  }

  return (

    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" />
    </div>

  );
}

export default Home;