import { Routes, Route } from "react-router-dom";
import './App.css';
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
