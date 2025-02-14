import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Card from "./components/card/Card";
import About from "./pages/About";
import ProjectPage from "./pages/projectPage";
import Insights from "./pages/Insights";
import Testimonial from "./pages/Testimonial";
import Upcoming from "./pages/Upcoming";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Careers from "./pages/Careers";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <div className="all">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path='/careers' element={<Careers/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
