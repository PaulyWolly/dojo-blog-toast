/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import ToastComponent from "../ToastComponent";
import BlogList from "./BlogList";
/* eslint-disable no-unused-vars */

const Home = () => {

  // useState = React HOOK (1) of many
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)


  useEffect(() => {
    fetch ('http://localhost:8000/blogs')
      .then(res => {

        if (!res.ok) {
          throw Error('Could not fetch the data for that resource.')
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null)
      })
      .catch(err => {
        //console.log(err.message)
        setError(err.message)
        setIsPending(false)
      })

  }, [])

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