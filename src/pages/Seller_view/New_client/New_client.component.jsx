import React, { useState } from "react";
import "./New_client.styles.css";
import HomeSellerImage from "../../../assets/HomeSellerImage.png";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { Link } from "react-router-dom";
import { crearUsuario } from "../../../api/usuariosApi";

export default function NewClient() {
  const handleCrearUsuario = async (data) => {
    try{
      await crearUsuario(data);
    }
    catch(error){
      console.log("error")
    }
  }
  const [formData, setFormData] = useState({
    nombre1: "",
    nombre2: "",
    apellido1:"",
    apellido2: "",
    dire: "",
    telefono:"",
    dire:"",
    correoElectronico:"",
    nomBar:"",
  });
   const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]:value}));
   }
    
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

        <form action={handleCrearUsuario} modo="crear" className="nc-form">
          <div className="nc-form-row">
            <input value={formData.nombre1} onChange={handleChange} type="text" placeholder="Nombre" className="nc-input" />
            <input type="text" placeholder="Dirección" className="nc-input" />
            <input type="text" placeholder="Ciudad" className="nc-input" />
          </div>

          <div className="nc-form-row">
            <input type="text" placeholder="Teléfono" className="nc-input" />
            <input type="email" placeholder="Correo Electrónico" className="nc-input" />
            <input type="text" placeholder="Documento" className="nc-input" />
          </div>
          <button type="submit"></button>
          <Link  to="/home-seller/new-order" className="nc-button">Guardar Cliente</Link>
        </form>
      </div>
    </div>
  );
}
