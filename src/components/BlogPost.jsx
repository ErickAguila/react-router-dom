import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "../data/BlogData";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogpost = blogdata.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate("/blog");
    // navigate(-1);
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export default BlogPost;
