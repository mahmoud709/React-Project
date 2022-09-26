import React from "react";
// class Allitems extends React.Component {
//   render() {
//     return (
//       <div className="items container">
//         <div className="item-1">
//           <div className="image">
//             <img src={this.props.image} alt="item-1" />
//           </div>
//           <div className="sp-icons">
//             <i className="fa-solid fa-heart"></i>
//             <i className="fa-solid fa-eye"></i>
//           </div>
//           <button className="btn-1">
//             <i className="fa-sharp fa-solid fa-cart-plus"></i>
//             {this.props.btn}
//           </button>
//         </div>
//         <p>{this.props.productInfo}</p>
//         <p className="price">price : {this.props.price}</p>
//       </div>
//     );
//   }
// }

// export default Allitems;
// Products images
import image1 from "../../images/product-1.jpg";
import image2 from "../../images/product-2.jpg";
import image3 from "../../images/product-3.jpg";
import image4 from "../../images/product-4.jpg";
import image5 from "../../images/product-5.jpg";
import image6 from "../../images/product-6.jpg";
import image7 from "../../images/product-7.jpg";
import image8 from "../../images/product-8.jpg";
import image9 from "../../images/product-9.jpg";
import image10 from "../../images/n8.jpg";
import image11 from "../../images/f2.jpg";
import image12 from "../../images/f6.jpg";

let items = [
  {
    id: 1,
    image: image1,
    productInfo: "Varsi Leather Bag",
    price: "25$",
  },
  {
    id: 2,
    image: image2,
    productInfo: "Fit Twill Shirt for man",
    price: "45$",
  },
  {
    id: 3,
    image: image3,
    productInfo: "Grand Atlantic Chukka Boots",
    price: "30$",
  },
  {
    id: 4,
    image: image4,
    productInfo: "man Faux-Trim Shirt",
    price: "26$",
  },
  {
    id: 5,
    image: image5,
    productInfo: "Cotton Shirt for Men",
    price: "35$",
  },
  {
    id: 6,
    image: image6,
    productInfo: "Varsi Leather Bag",
  },
  {
    id: 7,
    image: image7,
    productInfo: "Casmart Smart Watch",
    price: "40$",
  },
  {
    id: 8,
    image: image8,
    productInfo: "Varsi Leather Bag",
    price: "36$",
  },
  {
    id: 9,
    image: image9,
    productInfo: "Varsi Leather Bag",
    price: "18$",
  },
  {
    id: 10,
    image: image10,
    productInfo: "Soft Touch Interlock Polo",
    price: "29$",
  },
  {
    id: 11,
    image: image11,
    productInfo: "Double-breasted Blazer",
    price: "30$",
  },
  {
    id: 12,
    image: image12,
    productInfo: "Ribbed Cotton Bodysuits",
    price: "35$",
  },
];
export const Allitems = (props) => {
  return (
    <div className="items container">
  <div className="item-1">
    <div className="image">
      <img src={props.image} alt="item-1" />
    </div>
    <div className="sp-icons">
      <i className="fa-solid fa-heart"></i>
      <i className="fa-solid fa-eye"></i>
    </div>
    <button className="btn-1">
      <i className="fa-sharp fa-solid fa-cart-plus"></i>
      {props.btn}
    </button>
  </div>
  <p>{props.productInfo}</p>
  <p className="price">price : {props.price}</p>
</div>
  )
}

export let listProducts = items.map((e) => {
  return (
    <Allitems
      key={e.id}
      image={e.image}
      btn="add to card"
      productInfo={e.productInfo}
      price={e.price}
    />
  );
});

