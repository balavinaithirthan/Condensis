import React from 'react';
import NavbarBS from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarBS/>
        <Routes>
          <Route path="/About" element = {<About/>}></Route>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;