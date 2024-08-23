import React from 'react';
import '../css/bot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faCommentDots, faShareSquare, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Bot() {
  return (
    <div className="app-container">
      <header className="navbar">
        <Link to='/'>
            <div className="logo" style={{textDecoration : 'underline #f0f4f8'}}> LOGO</div>
        </Link>
      </header>
        <main className="content">
            <div className="query-section">
                <p className="user-query">give me an image of a dog</p>
                <div className="response-section">
                    <p className="response-text">Here’s a cute puppy for you! 🐶</p>
                    <img className="puppy-image" src="https://www.etsy.com/some-puppy-image.jpg" alt="cute puppy" />
                </div>
            </div>
            <div className="icon-section">
                <FontAwesomeIcon icon={faThumbsUp}  className="icon"/>
                <FontAwesomeIcon icon={faThumbsDown} className="icon" />
                <FontAwesomeIcon icon={faCommentDots} className="icon" />
                <FontAwesomeIcon icon={faShareSquare}  className="icon"/>
            </div>
        </main>
        <main className="content">
            <div className="query-section">
                <p className="user-query">give me an image of a dog</p>
                <div className="response-section">
                    <p className="response-text">Here’s a cute puppy for you! 🐶</p>
                    <img className="puppy-image" src="https://www.etsy.com/some-puppy-image.jpg" alt="cute puppy" />
                </div>
            </div>
            <div className="icon-section">
                <FontAwesomeIcon icon={faThumbsUp}  className="icon"/>
                <FontAwesomeIcon icon={faThumbsDown} className="icon" />
                <FontAwesomeIcon icon={faCommentDots} className="icon" />
                <FontAwesomeIcon icon={faShareSquare}  className="icon"/>
            </div>
        </main>

      <footer className="footers">
        <div className="prompt-input-container">
            <input className="prompt-input" type="text" placeholder="Enter a prompt here" />
            <FontAwesomeIcon icon={faCamera} className="prompt-input-icon" />
        </div>
      </footer>
    </div>
  );
}

export default Bot;
