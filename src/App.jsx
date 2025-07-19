import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from './components/Home';
import  About from './components/About';
import  Services from './components/Services'; 
import  Blog from './components/Blog';
import  Gallery from './components/Gallery';
import  Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
