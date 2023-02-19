import Navbar from "./components/Navbar";
import "./styles.css";
import {NavLink} from 'react-router-dom';
<NavLink className="nav-link active" to="/login">Login</Link>


export default function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
