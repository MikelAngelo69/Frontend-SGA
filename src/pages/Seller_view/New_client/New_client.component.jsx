import React, { useState } from "react";
import "./New_client.styles.css";
import HomeSellerImage from "../../../assets/HomeSellerImage.png";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { Link } from "react-router-dom";
import { crearUsuario } from "../../../api/usuariosApi";

export default function NewClient() {

  const handleCrearUsuario = async (e) => {
  e.preventDefault(); // evita que la página se recargue
  try {
    await crearUsuario(formData); // aquí sí mandas tus datos
    console.log("Usuario creado correctamente");
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
};
  const [formData, setFormData] = useState({
    numDocumento: "",
    nombre1: "",
    nombre2: "",
    apellido1:"",
    apellido2: "",
    contra: "",
    dire: "",
    tele:"",
    correoElectronico:"",
    idBarrio:"",
    idTipoDoc: "",
    idRol: "",
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

        <form onSubmit={handleCrearUsuario} modo="crear" className="nc-form">

          <div className="nc-form-row">
            <input onChange={handleChange} type="text" placeholder="PrimerNombre" name="nombre1" value={formData.nombre1} className="nc-input" />
            <input onChange={handleChange} type="text" placeholder="SegundoNombre" name="nombre2" value={formData.nombre2} className="nc-input" />
            <input onChange={handleChange} type="text" placeholder="PrimerApellido" name="apellido1" value={formData.apellido1} className="nc-input" />
            <input onChange={handleChange} type="text" placeholder="SegundoApellido" name="apellido2" value={formData.apellido2} className="nc-input" />
          </div>

          <div className="nc-form-row">
            <input type="text" placeholder="Dirección" name="dire" value={formData.dire} onChange={handleChange} className="nc-input" />
            <input type="text" placeholder="Barrio" name="idBarrio" value={formData.idBarrio} onChange={handleChange} className="nc-input" />
          </div>

          <div className="nc_form_row" id="nc-form-row2">
            <input type="text" placeholder="Teléfono" name="tele" value={formData.tele} onChange={handleChange} className="nc-input"/>
            <input type="email" placeholder="Correo Electrónico" onChange={handleChange} name="correoElectronico" value={formData.correoElectronico} className="nc-input"/>
            <input type="text" placeholder="Documento" onChange={handleChange} name="numDocumento" value={formData.numDocumento} className="nc-input"/>
            <input type="text" placeholder="Contra" onChange={handleChange} name="contra" value={formData.contra} className="nc-input"/>
            <input type="text" placeholder="tipo de documento" onChange={handleChange} name="idTipoDoc" value={formData.idTipoDoc} className="nc-input"/>
            <input type="text" placeholder="Rol" onChange={handleChange} name="idRol" value={formData.idRol} className="nc-input"/>
          </div>
          <button type="submit" className="nc-button"> Guardar cliente </button>
          <Link  to="/home-seller/new-order" className="nc-button">Crear Alquiler</Link>
        </form>
      </div>
    </div>
  );
}