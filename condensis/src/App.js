import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Courses from './pages/Courses';
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import StanfordCourses from "./pages/StanfordCourses";
import CreateInvoice from "./pages/Invoice";
import PDF from "./pages/pdf";

export default function App() {

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Courses" element={<Courses/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Stanford" element={<StanfordCourses/>}/>
          <Route exact path="/Invoice" element={<CreateInvoice/>}/>
          <Route exact path="/course_detail/0" element={<CourseDetail course_id={0} />}/>
          <Route exact path="/course_detail/1" element={<CourseDetail course_id={1} />}/>
          <Route exact path="/course_detail/2" element={<CourseDetail course_id={2} />}/>
          <Route exact path="/course_detail/3" element={<CourseDetail course_id={3} />}/>
          <Route exact path="/course_detail/4" element={<CourseDetail course_id={4} />}/>
          <Route exact path="/course_detail/5" element={<CourseDetail course_id={5} />}/>
          <Route exact path="/course_detail/6" element={<CourseDetail course_id={6} />}/>
          <Route exact path="/course_detail/7" element={<CourseDetail course_id={7} />}/>
          <Route exact path="/course_detail/8" element={<CourseDetail course_id={8} />}/>
          <Route exact path="/pdf/0" element={<PDF pdf_id={0} />}/>
          <Route exact path="/pdf/1" element={<PDF pdf_id={1} />}/>
          <Route exact path="/pdf/2" element={<PDF pdf_id={2} />}/>
          <Route exact path="/pdf/3" element={<PDF pdf_id={3} />}/>
          <Route exact path="/pdf/4" element={<PDF pdf_id={4} />}/>
          <Route exact path="/pdf/5" element={<PDF pdf_id={5} />}/>
          <Route exact path="/pdf/6" element={<PDF pdf_id={6} />}/>
          <Route exact path="/pdf/7" element={<PDF pdf_id={7} />}/>
          <Route exact path="/pdf/8" element={<PDF pdf_id={8} />}/>
        </Routes>
      </Router>
    </div>
    
  );
}
