import React, { useRef, useContext } from "react";
import { BlogComponent } from "../../App";
import "./Form.css";

function Form() {
  const { blog, setBlog } = useContext(BlogComponent);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  console.log(blog);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlog([
      ...blog,
      {
        id: Date.now(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      },
    ]);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the title" ref={titleRef} />
        <textarea placeholder="Enter the description" ref={descriptionRef} />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
