import React from 'react'
import { ProductsTitle } from '../Products/ProductTitle'
import "./contact.css"
export const Contact = () => {
  return (
    <div className='contact-page container' id="contact">
    <ProductsTitle title="contact us" />
        <div className="contac-row-1">
            <input type={"text"} placeholder="Your name" required/>
            <input type={"mail"} placeholder="Your E-mail" required/>
        </div>
        <div className="contac-row-2">
            <input type={"text"} placeholder="subject" required/>
            <input type={"text"} placeholder="phone number" />
        </div>
        <div className="text-area">
            <textarea placeholder='your maessage'></textarea>
        </div>
        <button className='btn-1'>Send</button>
    </div>
  )
}
