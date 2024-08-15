import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import ColorsForm from './ColorsForm';
import ColorDetail from './ColorDetail';
import Home from './Home';

function App() {
  const [colors, setColors] = useState([
    { name: 'red', hue: '#FF0000' },
    { name: 'blue', hue: '#0000FF' }
  ]);

  const addColor = (color) => {
    setColors([...colors, color]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<Home colors={colors} />} />
          <Route path='/colors/:color' element={<ColorDetail colors={colors} />} />
          <Route path='/colors/new' element={<ColorsForm addColor={addColor} />} />
          <Route path='*' element={<Navigate to='/colors' />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
