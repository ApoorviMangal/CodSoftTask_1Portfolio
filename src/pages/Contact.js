import React from 'react';
import NavBar from "../components/NAVBAR/NavBar";
import Footer from "../components/FOOTER/Footer";
import PageTitle from '../components/PAGE TITLE/PageTitle';
import ContactFrame from '../components/CONTACT CONTENT/ContactFrame';

const Contact = () =>{
    return (
        <div>
             <NavBar />
                <PageTitle title="Contact Me"/>
                <ContactFrame />
             <Footer />
        </div>
    )
}

export default Contact;