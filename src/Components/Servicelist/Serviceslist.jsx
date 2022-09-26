import React from 'react'
import '../Servicelist/Service.css'
import serv_1_icon from "../../images/service-icon-1.svg";
import serv_2_icon from "../../images/service-icon-2.svg";
import serv_3_icon from "../../images/service-icon-3.svg";
import serv_4_icon from "../../images/service-icon-4.svg";

const info = [
    {
      id: 1,
      Image_1: serv_1_icon,
      servTitle: "Free Shipping",
      servInfo: "On All Order Over",
    },
    {
      id: 2,
      Image_1: serv_2_icon,
      servTitle: "Easy Returns",
      servInfo: "30 Day Returns Policy",
    },
    {
      id: 3,
      Image_1: serv_3_icon,
      servTitle: "Secure Payments",
      servInfo: "100% Secure",
    },
    {
      id: 4,
      Image_1: serv_4_icon,
      servTitle: "Special Support",
      servInfo: "24/7 Dedicated",
    },
  ];
export const Serviceslist = (props) => {
return (
    <div className='serv-1'>
        <img src={props.image} alt='serv-1-icon'></img>
        <div className='serv-info'>
            <h3>{props.servTitle}</h3>
            <p>{props.servInfo}</p>
        </div>
    </div>
)
}
export let arrange = info.map((el) => {
    return (
    <Serviceslist
        key={el.id}
        image={el.Image_1}
        servTitle={el.servTitle}
        servInfo={el.servInfo}
    />
    );
});