import React from 'react';
import "./MainContext.css";

import bgImg from "../assets/Images/realistic-neon-lights-background.png";
import girlImg from "../assets/Images/south-asian-female-banker-her-30-removebg-preview.png"
import { Link } from 'react-router-dom';
import SocialHandles from '../SOCIALS/SocialHandles';
import ApoorviResume from "../assets/Files/ApoorviResume.pdf"

const MainContext = () =>{
    return (
        <div className='mainFrame'>
            <div className='bgMask'>
                <img className='bgImg' src={bgImg} alt='BgImg' />
            </div>
            <div className='homeInfo'>
                <div className='homeCntnt'>
                    <p>Hello, I am</p>
                    <h2>Apoorvi Mangal</h2>
                    <h1>Frontend Developer</h1>
                    <div className='ButtonHolder'>
                        <Link to="/contact" className='btn'>Let's connect</Link>
                        <a href={ApoorviResume} target='blank' className='btn active-btn'>Resume</a>
                    </div>
                    <SocialHandles />
                </div>
                <div className='homeImgHolder'>
                    <img src={girlImg} />
                </div>
            </div>
        </div>
    )
}

export default MainContext;