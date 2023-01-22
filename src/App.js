import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './navbar';
import History from './History';
import Homepage from './Homepage';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="appcontainer">
      <NavBar />

      <Routes>
        <Route exact="true" path="/" element={<Homepage />}  />
        <Route exact="true" path="/Homepage" element={<Homepage />}  />
        <Route path="/History" element={<History />}  />
      </Routes>
      
    </div>
  );
}

export default App;
