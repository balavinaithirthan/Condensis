import Navbar from "./components/Navbar";
import "./styles.css";
import {NavLink} from 'react-router-dom';


export default function App() {
  return (
    <NavLink className="nav-link active" to="/login">Login</Link>

    <div className="App">
      <Navbar />
    </div>
  );
}
