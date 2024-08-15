import React from "react";
import "./ContactFrame.css";

const ContactFrame = () =>{
    return(
        <section className='contact_Page' id='contact_Page'>
                <div className='Contact_left_section'>
                <h3>Let's Get In Touch</h3>
                <p>Email: <span>apoorvimangal75706@gmail.com</span></p>
                <p>Phone: <span>******9010</span></p>
                <p id='contact_cntnt'>I'd love to hear from you! Whether you have questions, opportunities, or just want to connect, feel free to reach out. You can contact me through the form below or via email. Looking forward to connecting with you!</p>
                </div>
                <div className='Contact_right_section'>
                <form action='https://getform.io/f/aqonymna' method='POST' className='contactForm'>
                    <h2>Fill the form to Contact Me</h2>
                    <div className='nameEmailBox'>
                    <input type='text' name='Name' placeholder='Enter your name' className='inputFields' required></input>
                    <input type='text' name='email' placeholder='Enter your Email' className='inputFields' required></input>
                    </div>
                    <div className='messageBox'>
                        <label>Enter your Message</label>
                        <textarea name='message' placeholder="Enter Your Message" className='inputFields txtArea' required> </textarea>
                    </div>
                    <button type='submit' className='btn'>Send</button>
                </form>
                </div>

                </section>
    )
}

export default ContactFrame;