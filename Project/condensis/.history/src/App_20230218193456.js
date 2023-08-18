import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<App>}/>
          
        </Routes>
      </Router>
    </div>
  );
}
