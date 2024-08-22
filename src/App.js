import React from 'react';
import './App.css';
import botImage from './Images/bot.png'; 
import Features from './components/js/features';
import Contact from './components/js/contact';
import Footer from './components/js/footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="x" alt="website Logo" className="logo" />
      </header>
      <main className="main-content">
        <div className="text-section">
          <h1>Name of the website</h1>
          <p>
            Small description about the project.
          </p>
          <button className='try'>Try name</button>
        </div>
        <div className="image-section">
          <img src={botImage} alt="normal bot" className="bot" />
        </div>
      </main>
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
