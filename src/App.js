import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./pages/News";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () =>{
    return (
      <Router>
        <NavBar></NavBar>
        <div className="container my-3">
          <Routes>
             <Route path="/" element={<News/>}/>
          
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  
}
export default App;