import React,{useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { BlogComponent } from "../../App";



const BlogDetails = () => {
  const { id } = useParams();
  const { blog } = useContext(BlogComponent);
  console.log(blog);
  return (
    <div>
      {blog.map((b) => {
        if (b.id == id) {
          return (
            <>
            <div key={b.id}>
              <h1>{b.title}</h1>
              <p>{b.description}</p>
            </div>
            <Link to='/'><button>Back to Home</button></Link>
            </>
          );
        }
      })}
    </div>
  );
};

export default BlogDetails;
