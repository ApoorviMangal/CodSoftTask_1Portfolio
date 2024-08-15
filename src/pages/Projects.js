import React from 'react';
import NavBar from "../components/NAVBAR/NavBar";
import Footer from "../components/FOOTER/Footer";
import PageTitle from '../components/PAGE TITLE/PageTitle';
import ProjectFrame from '../components/PROJECT CONTENT/ProjectFrame';


const Projects = () =>{
    return (
        <div> 
            <NavBar />
            <PageTitle title="Projects" />
            <ProjectFrame />
            <Footer />
            </div>
    )
}

export default Projects;