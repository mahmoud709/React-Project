import React from "react";
import './Header.css'
export default function Header(props) {
    function ShowSidebar(){
        const Side_bar=document.querySelector(".Side-bar");
        Side_bar.classList.toggle("show-sidebar")
    }
    return(
    <div className="content">
        <div className="Header container">
        <div className="logo">
            <h2>Store</h2>
        </div>
        <div className="icons">
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-bars-staggered" id="bar-icon" onClick={ShowSidebar}></i>
        </div>
    </div>
    </div>
    )
}
