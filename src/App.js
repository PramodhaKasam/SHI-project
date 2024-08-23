import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Bot from './components/js/bot';
import Home from './components/js/home';

function App() {
  return (
    <>
      <BrowserRouter >
          <Routes>
              <Route path='/Bot' element={<Bot />}/>
              <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
     
  );
}

export default App;
