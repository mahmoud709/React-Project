import React from 'react'
export const SideBar = (props) => {
    function close (){
        const Side_bar=document.querySelector(".Side-bar");
        Side_bar.classList.remove("show-sidebar")
    }
    return (
    <div>
        <div className="Side-bar">
            <i className="fa-solid fa-x" id='close-icon' onClick={close}></i>
            <ul>
            <li><a href="index.html">{props.link1}</a></li>
            <li><a href="#shop">{props.link2}</a></li>    
            <li><a href="#about-page">{props.link3}</a></li>    
            <li><a href="#contact">{props.link4}</a></li>
            <li><a href="index.html">{props.link5}</a></li>
            </ul>
        </div>
    </div>
)
}
