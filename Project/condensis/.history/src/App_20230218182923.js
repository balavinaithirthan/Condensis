import React from 'react';
import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/About" element = {<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;