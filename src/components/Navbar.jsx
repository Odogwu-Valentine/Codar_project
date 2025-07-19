import { NavLink } from 'react-router-dom';

function App() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src="/logo.png.webp" alt="Logo" />
      </div>
      <ul className="navbar-links ">
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
