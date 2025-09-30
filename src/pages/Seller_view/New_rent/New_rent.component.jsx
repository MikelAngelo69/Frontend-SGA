import { useState } from "react";
import "./New_rent.styles.css";
import HomeSellerImage from "../../../assets/HomeSellerImage.png";
import ImagenAlquiler from "../../../assets/NewRent.png";
import ImagenDefault from "../../../assets/ImagenQuieto.png";    
import ImagenUsuario from "../../../assets/ImagenUsuarioEncontrado.png";     
import ImagenError from "../../../assets/imagenConfundido.png";         
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { Link } from "react-router-dom";

export default function NewRent() {
  const [documento, setDocumento] = useState("");

  let imagen = ImagenDefault;
  let mensaje = "Por favor escribe el documento zozorra sucia 3:)";

  if (documento.length === 10) {
    if (documento === "1013098670") {
      imagen = ImagenUsuario;
      mensaje = " El hp usuario ha sido encontrado en la fokin data base >:)";
    } else {
      imagen = ImagenError;
      mensaje = "El usuario esta como elif, Usuario no encontrado :(";
    }
  }

  return (
    <div
      className="new-rent-container"
      style={{ backgroundImage: `url(${HomeSellerImage})` }}
    >
      <NavbarSeller />
      <div className="overlay"></div>
      <div className="form-section">
        <h1 className="form-title">Bienvenido</h1>

        <h2 className="form-secondary-title">Por favor, Ingresa el documento</h2>
        <p className="form-secondary-subtitle">Cédula de Ciudadanía</p>

        <input
          type="text"
          maxLength={10}
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          placeholder="Escribe aquí..."
          className="form-input"
        />

        <Link to="/home-seller/new-client" className="form-button">
          Continuar
        </Link>


        <div className="status-section">
          <img src={imagen} alt="estado usuario" className="status-image" />
          <p className="status-text">{mensaje}</p>
        </div>
      </div>

      <div className="image-section">
        <img src={ImagenAlquiler} alt="Vista alquiler" />
      </div>
    </div>
  );
}
