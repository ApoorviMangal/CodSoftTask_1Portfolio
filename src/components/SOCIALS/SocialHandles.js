import React from 'react';
import "./SocialHandles.css";
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const SocialHandles = () =>{
    return(
        <div className='SocialBox'>
            <div className='SocialBtn'> <a href='https://www.linkedin.com/in/apoorvi-mangal' target='blank'><FaLinkedin  /></a></div>
            <div className='SocialBtn'> <a href='https://github.com/ApoorviMangal' target='blank'><FaGithub /></a></div>
            <div className='SocialBtn'> <a href='https://twitter.com/ApoorviMangal?t=hhUnX6oXZdVxpVAOcr2vyA&s=08' target='blank'><FaTwitter /></a></div>
            
        </div>
    )
}

export default SocialHandles;