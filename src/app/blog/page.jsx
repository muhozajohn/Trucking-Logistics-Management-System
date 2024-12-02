import React from "react";
import "./blog.scss";
import Image from "next/image";
import { blogPosts } from "../../components/json";

const BlogPage = () => {


  return (
    <div className="blog">
      <h1 className="blog__title">Our Blog</h1>
      <div className="blog__grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog__card">
            <div className="blog__image-container">
              <Image src={post.image} alt={post.title} className="blog__image" />
            </div>
            <div className="blog__content">
              <h2 className="blog__card-title">{post.title}</h2>
              <p className="blog__description">{post.description}</p>
              <button className="blog__read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
