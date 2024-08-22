import React from "react";
import '../css/features.css'

function Features()
{
    return(
        <>
            <section className="features-section">
                <h2>An AI Assistant</h2>
                <h3>About AI assistant.</h3>
                <div className="features-grid">
                <div className="feature-item">
                    <img src="https://img.icons8.com/color/48/000000/globe.png" alt="Finds Common Objects" />
                    <div>
                    <h4>Finds Common Objects</h4>
                    <p>1,000 common objects can be identified and heard.</p>
                    </div>
                    
                </div>
                <div className="feature-item">
                    <img src="https://img.icons8.com/color/48/000000/hamburger.png" alt="Recognizes Food" />
                    <div>
                    <h4>Finds Common Objects</h4>
                    <p>1,000 common objects can be identified and heard.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <img src="https://img.icons8.com/color/48/000000/read.png" alt="Reads Text" />
                    <div>
                    <h4>Finds Common Objects</h4>
                    <p>1,000 common objects can be identified and heard.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <img src="https://img.icons8.com/color/48/000000/flower.png" alt="Expert in Nature" />
                    <div>
                    <h4>Finds Common Objects</h4>
                    <p>1,000 common objects can be identified and heard.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <img src="https://img.icons8.com/color/48/000000/flower.png" alt="Knows Colors" />
                    <div>
                    <h4>Finds Common Objects</h4>
                    <p>1,000 common objects can be identified and heard.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <img src="https://img.icons8.com/color/48/000000/paper-plane.png" alt="Fast and Portable" />
                    <div>
                    <h4>Finds Common Objects</h4>
                    <p>1,000 common objects can be identified and heard.</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Features;