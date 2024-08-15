import React from 'react';
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import SocialHandles from '../SOCIALS/SocialHandles';


const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footerCntnt'>
                <div className='footerLeftCntnt '>
                    <p className='footerHeading'>where you can find me?</p>
                    <div className='location'>
                        <FaHome className='footerIcons'/>
                        <div>
                            <p>123 xyz</p>
                            <p>Jaipur</p>
                        </div>
                    </div>
                    <div className='phone'>
                       <h3><FaPhone className='footerIcons'/> ******9010</h3> 
                    </div>
                    <div className='mail'>
                       <h3><FaMailBulk className='footerIcons'/> apoorvimangal75706@gmail.com</h3> 
                    </div>
                   
                </div>
                <div className='footerRightCntnt '>
                    <p className='footerHeading'> Connect With Me..</p>
                    <SocialHandles />
                </div>
            </div>
            <div className='FooterCopyRight'></div>
        </div>
    );
}

export default Footer;