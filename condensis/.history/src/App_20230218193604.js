import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path='./pages/About' element={}
        </Routes>
      </Router>
    </div>
  );
}
