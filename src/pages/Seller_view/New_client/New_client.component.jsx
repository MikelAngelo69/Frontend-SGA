import React from "react";
import "./New_client.styles.css";
import HomeSellerImage from "../../../assets/HomeSellerImage.png";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { Link } from "react-router-dom";

export default function NewClient() {
  return (
    <div
      className="nc-container"
      style={{ backgroundImage: `url(${HomeSellerImage})` }}
    >
      <NavbarSeller />
      <div className="nc-overlay"></div>

      <div className="nc-form-section">
        <h1 className="nc-form-title">Registra los datos del nuevo cliente</h1>
        <p className="nc-form-subtitle">
          Para registrar la información de manera completa y eficiente, le solicitamos atentamente que ingrese los datos requeridos a continuación con la máxima claridad y precisión posible.
        </p>

        <form className="nc-form">
          <div className="nc-form-row">
            <input type="text" placeholder="Nombre" className="nc-input" />
            <input type="text" placeholder="Dirección" className="nc-input" />
            <input type="text" placeholder="Ciudad" className="nc-input" />
          </div>

          <div className="nc-form-row">
            <input type="text" placeholder="Teléfono" className="nc-input" />
            <input type="email" placeholder="Correo Electrónico" className="nc-input" />
            <input type="text" placeholder="Documento" className="nc-input" />
          </div>

          <Link to="/home-seller/new-order" className="nc-button">Guardar Cliente</Link>
        </form>
      </div>
    </div>
  );
}
