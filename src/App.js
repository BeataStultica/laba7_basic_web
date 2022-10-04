import './App.css';
import Home from './components/Home'
import Catalog from './components/Catalog'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (<Router>
    <div className='content'>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  </Router>
  );

}


export default App;

