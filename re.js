import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ABC Studios</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/join-us">Join Us</Link></li>
        <li><Link to="/esports">Esports</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
