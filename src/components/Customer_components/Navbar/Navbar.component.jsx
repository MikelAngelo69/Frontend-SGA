import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-left">SGA</div>
      <ul className="navbar-center">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/accesorios">Accesorios</Link></li>
        <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
      </ul>
      <div className="navbar-right">
        <Link to="/sign-in"><FaUser className="login-icon" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
