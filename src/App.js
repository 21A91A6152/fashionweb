import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Map from './components/map';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
