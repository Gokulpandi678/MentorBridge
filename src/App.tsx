import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DisplayItems } from './pages/DisplayItems';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DisplayItems />}/>
        {/* <Route path='/' element={<DisplayItems />}/> */}
      </Routes>
    </div>
  );
}

export default App;
