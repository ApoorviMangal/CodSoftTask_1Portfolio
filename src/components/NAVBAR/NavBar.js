import React, { useState } from 'react';
import './NavBarStyle.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon} from "react-icons/fa"

const NavBar = () =>{
    const [click, setClick] = useState(false);
    const toggle = () => setClick(!click);

    const [hederColor, setHeaderColor] = useState(false);

    const changeHeaderColor = () =>{
        if(window.scrollY > 100) setHeaderColor(true);
        else setHeaderColor(false);
    }
    window.addEventListener('scroll', changeHeaderColor);

    return(
        <div className={hederColor? "navigationBar navigationBg" : "navigationBar" }>
            <Link to="/">
            <h1 className='logo'>Apoorvi.</h1>
            </Link>
            <ul className={click? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggle}>About</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={toggle}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={toggle}>Contact</Link>
                </li>
            </ul>
            <div className='menuBtn' onClick={toggle}>
            {click ? (<FaTimes />) : (<FaBars />)}
            </div>
        </div>
    )
}

export default NavBar;