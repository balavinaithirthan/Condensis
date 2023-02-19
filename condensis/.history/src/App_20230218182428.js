import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '.About.js';


export default function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
