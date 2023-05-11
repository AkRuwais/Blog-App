import React, { useContext } from "react";
import { BlogComponent } from "../../App";
import { Link } from "react-router-dom";
import './Bloglist.css'

const BlogList = () => {
  const { blog } = useContext(BlogComponent);
    console.log(blog);
  return (
    <div>
      {blog.map((b) => {
        return (
          <div className="details" key={b.id}>
            <h3>{b.title}</h3><br />
            <Link to={`details/${b.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
