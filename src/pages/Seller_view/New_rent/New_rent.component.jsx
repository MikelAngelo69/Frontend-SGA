import React, { useState } from "react";
import "./New_rent.styles.css";
import HomeSellerImage from "../../../assets/HomeSellerImage.png";
import imagenQuieto from "../../../assets/imagenQuieto.png";
import imagenNoExiste from "../../../assets/imagenConfundido.png";
import imagenExiste from "../../../assets/ImagenUsuarioEncontrado.png";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";

const NewRent = () => {
  const [numero, setNumero] = useState("");
  const [imagenKey, setImagenKey] = useState(0);

  let imagenMostrar = imagenQuieto;
  let textoEstado = "";

  if (numero.length === 10) {
    if (numero === "1013098670") {
      imagenMostrar = imagenExiste;
      textoEstado = "El usuario existe";
    } else {
      imagenMostrar = imagenNoExiste;
      textoEstado = "El usuario no existe en la base de datos";
    }
  }

  const handleChange = (e) => {
    setNumero(e.target.value);
    if (e.target.value.length === 10) {
      setImagenKey((prev) => prev + 1);
    }
  };

  return (
    <>
      <NavbarSeller />
      <div
        className="nuevo-alquiler-container"
        style={{
          backgroundImage: `url(${HomeSellerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="columna-izquierda">
          <h1>Generar un nuevo alquiler</h1>
          <h2>Ingrese el número de documento</h2>
          <input
            type="text"
            value={numero}
            onChange={handleChange}
            placeholder="Número de documento"
            maxLength={10}
            className="input-documento"
          />
          <button className="btn-verificar">Verificar</button>
        </div>
        <div className="columna-derecha">
          <div className="imagen-texto-contenedor">
            <img
              key={imagenKey}
              src={imagenMostrar}
              alt="estado"
              className="imagen-estado fade-in"
            />
            {textoEstado && <p className="texto-estado">{textoEstado}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRent;
