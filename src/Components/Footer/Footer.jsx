import React from "react";
import "./Footer.css";
import PaymentImage from "../../images/payment-img.png";
export const Footer = (props) => {
  return (
    <div className="footer">
      <footer className="container">
        <div className="col-1">
          <div className="col-info">
            <h3>our store</h3>
            our store is a fashion theme for presents a complete wardrobe of
            uniquely crafted Ethnic Wear, Casuals, Edgy Denims, & Accessories
            inspired from the most contemporar
          </div>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="col-2">
          <h3>{props.title}</h3>
          <ul>
            <li>-About Company</li>
            <li>-Payment Type</li>
            <li>-Awards Winning</li>
            <li>-World Media Partner</li>
            <li>-Become an Agent</li>
            <li>-Refund Policy</li>
          </ul>
        </div>
        <div className="col-3">
          <h3>{props.title_2}</h3>
          <ul>
            <li>-Handbags & Wallets</li>
            <li>-Women's Clothing</li>
            <li>-Plus Sizes</li>
            <li>-Complete Your Look</li>
            <li>-Baby Corner</li>
            <li>-Man & Woman Shoe</li>
          </ul>
        </div>
        <div className="col-4">
          <h3>{props.title_3}</h3>
          <ul>
            <li>-Dealers & Agents</li>
            <li>-Return Policy</li>
            <li>-List of Shops</li>
            <li>-Shipping & Delivery</li>
            <li>Order Tranking</li>
            <img src={PaymentImage} alt="PayMent" />
          </ul>
        </div>
      </footer>
    </div>
  );
};
