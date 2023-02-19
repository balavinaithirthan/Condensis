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
          {/* <Route path="/Courses" element = {<Courses/>}/> */}
          <Route path="/About" element = {<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;