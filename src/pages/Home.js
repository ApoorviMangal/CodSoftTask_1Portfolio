import React from 'react';
import NavBar from '../components/NAVBAR/NavBar';
import MainContext from '../components/HOME CONTENT/MainContext';
import Footer from "../components/FOOTER/Footer";
import AboutFrame from "../components/ABOUTCONTENT/AboutFrame";
import ProjectFrame from '../components/PROJECT CONTENT/ProjectFrame';
import ContactFrame from '../components/CONTACT CONTENT/ContactFrame';

const Home = () =>{
    return (
        <div className='home'>
            <NavBar />
            <MainContext />
            <AboutFrame />
            <ProjectFrame />
            <ContactFrame />
            <Footer />
        </div>
    )
}

export default Home;
