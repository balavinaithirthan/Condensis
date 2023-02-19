import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import About from './pages/About';
import Courses from './pages/Courses';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Courses" element={<Courses/>}/>
          <Route path='./pages/About' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}
