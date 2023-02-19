import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import About from './pages/About';
import Courses from './pages/Courses';
import { useState } from "react";




export default function App() {

  return (
    <div className="App">
      
      <Router>
        
        <Navbar/>
        
        <Routes>
          <Route exact path="/Home" element={<App/>}/>
          <Route exact path="/Courses" element={<Courses/>}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
      </Router>
      <div className="Search">
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search..."
        value={prefix}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <input
        type="text"
        name="search-bar"
        id="search-bar2"
        value={suggestion}
      />
    </div>
    </div>
    
  );
}
