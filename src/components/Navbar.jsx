import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function App() {
const [click, setClick] = useState(false);
 const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src="/logo.png.webp" alt="Logo" />
      </div>
      <div className="navbar__menu-icon" onClick={handleClick}>
          <span className="material-symbols-outlined">
            {click ? "close" : "menu"}
          </span>
        </div>
      <ul className={`navbar-links ${click ? "active" : ""}`}>
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/Services" className="nav-link">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Blog" className="nav-link">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" className="nav-link">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="nav-link">Contact</NavLink>
        </li>
        <button className="navbar-button">Free Qoute</button>
      </ul>
    </nav>
  );
}

export default App;
