import React from "react";
import '../Category/category.css';
export const Category = (props) => {
  return (
    <div className="categories" id="shop">
      <div className="type">
        <span>Best Seller</span>
        <span> Hot Collection</span>
        <span>Trendy</span>
        <span>New Arrival</span>
      </div>
    </div>
  );
};
