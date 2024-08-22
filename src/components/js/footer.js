import React from "react";
import '../css/footer.css'

function Footer()
{
    return(
        <>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Company Name. All rights reserved.</p>
                    <p>Contact us: <a href="mailto:contact@x.com">contact@x.com</a></p>
                    <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;