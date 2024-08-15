import React from "react";
import about_Me_Img from "../assets/Images/aboutMe.png";
import { FaMousePointer } from "react-icons/fa";
import "./AboutFrame.css";

const AboutFrame = () =>{
    return (
        <section id='about' className='about'>
                <div className='about_container'>
                    <div className='about_img_holder'>
                    <img src={about_Me_Img}></img>
                    </div>
                    <ul className='about_cntnt_container'>
                        <li className='about_cntnt'>
                            <FaMousePointer className="about_cntnt_icons"/>
                            <div>
                            <h4>Frontend Developer</h4>
                            <p>I’m a frontend developer passionate about creating clean, user-friendly websites and applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in turning design concepts into responsive and interactive interfaces.
                            </p>
                            </div>
                        </li>
                        <li className='about_cntnt'>
                            <FaMousePointer className="about_cntnt_icons"/>
                            <div>
                            <h4>React Developer</h4>
                            <p>React developer crafting dynamic, responsive web applications with efficient, maintainable, and scalable component-based design.
                            </p>
                            </div>
                        </li>
                        <li className='about_cntnt'>
                            <FaMousePointer className="about_cntnt_icons"/>
                            <div>
                            <h4>JavaScript Developer</h4>
                            <p>JavaScript developer building interactive, high-performance web applications with clean, efficient, and scalable code
                            </p>
                            </div>
                        </li>
                    
                       
                    </ul>
                </div>
            </section>
    )
}

export default AboutFrame;