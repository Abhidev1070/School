import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}/> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, totam asperiores quis nihil ad alias assumenda animi distinctio mollitia vel voluptates ullam dolore ipsam modi.</p>
            <ul>
            <li><img src={mail_icon} alt="" /> contact@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +91 251 3647 289</li>
                <li> <img src={location_icon} alt="" />Indore</li>
            </ul>

        </div>
        <div className="contact-col">
            <form >
                <label >Your name</label>
                <input type="text" name='name' placeholder='Enter your  Name' required />
                <label >Phone Number</label>
                <input type="tel" name="Phone" placeholder='Enter your mobile number'required />

                <label > Write your message here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn '>Submit Now <img src={white_arrow} alt="" /> </button>

            </form>
            <samp></samp>



        </div>
        
    </div>
  )
}

export default Contact