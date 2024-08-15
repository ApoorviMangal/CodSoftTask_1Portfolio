import React from "react";
import ExpenseTracker from "../assets/Images/ExpenseTracker.jpg"
import VTA from "../assets/Images/VTA.png";
import Portfolio from "../assets/Images/Portfolio.png";
import "./ProjectFrame.css";

const ProjectFrame = () =>{
    return(
        <>
        <section id='project_section' className='project_section'>
                <div className='ProjectContainer'>
                    <div className='project-box'>
                        <img src={VTA} alt='projectImange'></img>
                        <div className='project-layer'>
                            <h2>VTA</h2>
                            <p>Developed the user friendly frontend of VTA, Virtual training App using HTML, CSS and JavaScript. This application allows a student to explore teachers and online courses.
                            </p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <img src={Portfolio} alt='projectImange'></img>
                        <div className='project-layer'>
                            <h2>Personal Portfolio</h2>
                            <p>Developed a dynamic personal portfolio using React.js to effectively showcase my skills, projects, and professional achievements.
                            </p>
                        </div>
                    </div>
                    <div className='project-box'>
                        <img src={ExpenseTracker} alt='projectImange'></img>
                        <div className='project-layer'>
                            <h2>Expense Tracker</h2>
                            <p>Developed a user-friendly expense traker using HTML, CSS and JavaScript.
                                This application allows user to effiently record their expenses and vies their total spending.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            </>
    )
}

export default ProjectFrame;