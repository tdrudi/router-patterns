import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DogList from './DogList';
import Navbar from "./Navbar";
import DogDetails from './DogDetails';

import axios from 'axios';

function App() {
  const [dogs, setDogs] = useState({
    data: [],
    isLoading: true
  });

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const res = await axios.get('db.json');
        const addData = res.data.dogs.map(d => ({
          name: d.name,
          age: d.age,
          src: d.src,
          facts: d.facts

        }));
        setDogs({
          data: addData,
          isLoading: false
        });
      } catch (err) {
        console.error("Error fetching dogs:", err);
      }
    }
    fetchDogs();
  }, []);

  if (dogs.isLoading === true) {
    <div>Loading...</div>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar dogs={dogs.data} />
        <h1>Hi there!</h1>
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs.data} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs.data} />} />
          <Route path="/*" element={<Navigate to="/dogs" />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;