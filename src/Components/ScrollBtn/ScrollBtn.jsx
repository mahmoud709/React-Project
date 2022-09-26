import React from 'react'
import './ScrolBtn.css'
import {useEffect} from 'react';
import '../HomePage/Home.css'
export const ScrollBtn = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

return (

    <div className='scroll-btn' id='scrollBtn' onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
        <span ><b>^</b></span>
    </div>
)
}
    
