import React from "react";
import "./Review.css";
import image_1 from "../../images/review/img-1.png";
import image_2 from "../../images/review/img-2.png";
import image_3 from "../../images/review/img-3.png";
import image_4 from "../../images/review/img-4.png";

const reviews = [
  {
    id: 1,
    img: image_1,
    name: "Susan Smith",
    jop: "WEB DEVELOPER",
    review:
      "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie  cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    img: image_2,
    name: "Anna Johnson",
    jop: "WEB DESIGNER",
    review:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    img: image_3,
    name: "Peter Jones",
    jop: "INTERN",
    review:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    img: image_4,
    name: "Bill Anderson",
    jop: "THE BOSS",
    review:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];


export const Review = (props) => {
    return (
    <div className="cards container">
        <div className="card-1">
            <img src={props.image} alt={`card-1`}/>
            <h3>{props.name}</h3>
            <p>{props.jop}</p>
            <article>{props.review}</article>
        </div> 

    </div>
    );
};

export let ShowReview = reviews.map((el) => {
    return (
    <Review
        key={el.id}
        image={el.img}
        name={el.name}
        jop={el.jop}
        review={el.review}
    />
    );
});

