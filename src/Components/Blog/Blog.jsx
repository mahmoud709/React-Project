import React from "react";
import { ProductsTitle } from "../Products/ProductTitle";
import "../Blog/Blog.css";
export const Blog = () => {
  return (
    <div className="blog-page">
      <ProductsTitle title="Subscribe Newsletter" />
      <p>
        Enter your email below to be the first to know about new collections and
        product launches.
      </p>
      <div className="input-contain">
        <div className="input-field">
          <input type="text" placeholder="Enter Your Email" />
          <button className="btn-1">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
