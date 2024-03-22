import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Map from './components/map';
import Fabrics from './components/Fabrics';
import Kuchu from './components/Kuchu';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/fabrics" element={<Fabrics />} />
          <Route path="/kuchu" element={<Kuchu />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
