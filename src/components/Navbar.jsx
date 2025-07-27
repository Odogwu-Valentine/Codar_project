import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function App() {
const [click, setClick] = useState(false);
 const handleClick = () => {
    setClick(!click);
  };

  const handleNavLinkClick = () => {
    setClick(false);
  }

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
          <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-link" onClick={handleNavLinkClick}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Services" className="nav-link" onClick={handleNavLinkClick}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/Blog" className="nav-link" onClick={handleNavLinkClick}>Blog</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" className="nav-link" onClick={handleNavLinkClick}>Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="nav-link" onClick={handleNavLinkClick}>Contact</NavLink>
        </li>
        <button className="navbar-button">Free Qoute</button>
      </ul>
    </nav>
  );
}

export default App;
