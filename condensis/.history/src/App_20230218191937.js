import NavBar from "./components/Navbar";
import "./styles.css";
import {NavLink} from 'react-router-dom';
import About from './pages/About';
import Courses from './pages/About.js';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path=".pages/About.js" element={<About/>}></Route>
          <Route exact path=".pages/Courses.js" element={<Courses/>}></Route>


        </Routes>
      </Router>
    </div>
  );
}
