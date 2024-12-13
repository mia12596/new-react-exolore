import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ bookMark }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blogs => setBlogs(blogs))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1>blogs: {blogs.length}</h1>
            {blogs.map(blog => <Blog key={blog.id} blog={blog} bookMark={bookMark} />)}

        </div>
    );
};

export default Blogs;