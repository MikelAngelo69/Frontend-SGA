import React from "react";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import "./Home_Seller.styles.css";
import HomeSellerImage from "../../../assets/HomeSellerImage.png"
import Alquiler from "../../../assets/Alquiler.png";
import Inventario from "../../../assets/inventario.png";
import Ordenes from "../../../assets/Ordenes.png";
import Clientes from "../../../assets/Clientes.png";

const HomeSeller = () => {
  return (
    <div className="home-seller" style={{ backgroundImage: `url(${HomeSellerImage})` }}>
      <div className="overlay"></div>
      <NavbarSeller />
      <main className="seller-main">
        <h1 className="seller-title">Bienvenido, Vendedor</h1>
        <p className="seller-subtitle">Administra tus alquileres, inventario y clientes fácilmente</p>
        <div className="button-grid">
          <a href="/nuevo-alquiler" className="seller-btn" style={{ backgroundImage: `url(${Alquiler})` }}>Nuevo Alquiler</a>
          <a href="/inventario" className="seller-btn" style={{ backgroundImage: `url(${Inventario})` }}>Inventario</a>
          <a href="/ordenes" className="seller-btn" style={{ backgroundImage: `url(${Ordenes})` }}>Órdenes</a>
          <a href="/clientes" className="seller-btn" style={{ backgroundImage: `url(${Clientes})` }}>Clientes</a>
        </div>
      </main>
    </div>
  );
};

export default HomeSeller;
