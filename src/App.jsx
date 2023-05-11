import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BlogDetails from "./components/Blogs/BlogDetails";
import Home from "./components/Blogs/Home";
export const BlogComponent = createContext();

function App() {
  const [blog, setBlog] = useState([]);

  return (
    <>
      <BrowserRouter>
        <BlogComponent.Provider value={{ blog, setBlog }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<BlogDetails />} />
          </Routes>
        </BlogComponent.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
