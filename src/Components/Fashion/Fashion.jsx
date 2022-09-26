import React from "react";
import "./Fasion.css";
import fashionImg1 from "../../images/blog-1.jpg";
import fashionImg2 from "../../images/blog-2.jpg";
import fashionImg3 from "../../images/blog-3.jpg";

let fasionDetails = [
  {
    id: 1,
    img: fashionImg1,
    imgInfo: "Worthy Cyber Monday Fashion From Casmart",
  },
  {
    id: 2,
    img: fashionImg2,
    imgInfo: "Holiday Home Decoration I’ve Recently Ordered",
  },
  {
    id: 3,
    img: fashionImg3,
    imgInfo: "Unique Ideas for Fashion You Haven’t heard yet",
  },
];
export const Fashion = (props) => {
  return (
    <div className="fashion-details" id="about-page">
      <div className="image">
        <img src={props.image} alt="fashion-img" />
      </div>
      <div className="text-info">
        <span>
          <i className="fa-solid fa-folder"></i>FASHION
        </span>

        <span>
          <i className="fa-solid fa-clock"></i> 31 MAR 2021
        </span>
      </div>
      <div className="Image-info">
        <h3>{props.imgInfo}</h3>
      </div>
    </div>
  );
};
export let fashionImages = fasionDetails.map((e) => {
  return <Fashion key={e.id} image={e.img} imgInfo={e.imgInfo} />;
});
