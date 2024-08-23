import React from "react";
import botImage from '../../Images/bot.png';
import '../css/home.css';
import { Link } from "react-router-dom";
import Features from './features';
import Contact from './contact';
import Footer from './footer';

function Home()
{
    return(
        <>
            <header className="header">
                <img src="x" alt="website Logo" className="logo" />
            </header>
            <main className="main-content">
                <div className="text-section">
                    <h1>Name of the website</h1>
                    <p>
                    Small description about the project.
                    </p>
                    <Link to='/Bot' >
                    <button className='try'>Try name</button>
                    </Link>
                </div>
                <div className="image-section">
                    <img src={botImage} alt="normal bot" className="bot" />
                </div>
            </main>
            <Features />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;