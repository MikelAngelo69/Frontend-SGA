import React from "react";
import { FaUser } from "react-icons/fa";
import "./Navbar_Seller.styles.css";

const NavbarSeller = () => {
  return (
    <nav className="navbar-seller">
      <div className="navbar-seller-left">SGA Vendedor</div>
      <ul className="navbar-seller-center">
        <li>Nuevo Alquiler</li>
        <li>Inventario</li>
        <li>Órdenes</li>
        <li>Clientes</li>
      </ul>
      <div className="navbar-seller-right">
        <FaUser className="login-icon-seller" />
      </div>
    </nav>
  );
};

export default NavbarSeller;
