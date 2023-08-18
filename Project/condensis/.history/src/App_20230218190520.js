import Navbar from "./components/Navbar";
import "./styles.css";
import {NavLink} from 'react-router-dom';
import About from '..pages/'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

      </Router>
    </div>
  );
}
