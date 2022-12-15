
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
//adding comment so that I can have a change to commit
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects/:id" element={<Projects />} />
  </Routes>)
}

export default App;
