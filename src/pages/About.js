import React from 'react';
import NavBar from "../components/NAVBAR/NavBar";
import Footer from "../components/FOOTER/Footer";
import PageTitle from "../components/PAGE TITLE/PageTitle";
import AboutFrame from "../components/ABOUTCONTENT/AboutFrame";


const About = () =>{
    return (
        <div>
            <NavBar />
            <PageTitle title="About Me"/>
            <AboutFrame />
            <Footer />
        </div>
    )
}

export default About;