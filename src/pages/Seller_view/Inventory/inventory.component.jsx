import React, { use, useEffect, useState } from "react";
import "./Inventory.styles.css";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { FaPencilAlt } from "react-icons/fa";
import { actualizarArticulo, obtenerArticulo, obtenerArticuloporId } from "../../../api/articulosApi";
import { data } from "react-router-dom";


const categories = ["Todos", "Éxitos", "Clásicos", "Favoritas"];

const Inventory = () => {

const [articulos, setArticulos] = useState([]);
const [editarArticulo, setEditarArticulo] = useState(null);
useEffect(() => {
  obtenerArticulo().then((data) => setArticulos(data))
},[])

const handleActualizarArticulo = async (data) => {
  try{
    // const articuloActualizado = await obtenerArticuloporId(editarArticulo.id);

    // setArticulos((prev) =>
    //   prev.map((e) => (e.id === editarArticulo.id ? articuloActualizado : e))
    // );
    
    await actualizarArticulo(editarArticulo.id,data);
  }
  catch (error){
    console.log("error al editar el usuario")
  }
}

  // const [songs, setSongs] = useState(initialSongs);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({ precioArti: "", fotoArti: ""});

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedData({ ...articulos[index] });
  };

  const handleCancel = () => setEditingIndex(null);

  return (
    <div className="inventory-wrapper">
      <NavbarSeller />
      <aside className="sidebar">
        <h2>Categorías</h2>
        <ul>
          {categories.map((cat, index) => <li key={index}>{cat}</li>)}
        </ul>
      </aside>

      <div className="inventory-container">
        <h1 className="inventory-title">Top Mejores Bellakeos de la historia</h1>
        <p className="inventory-subtitle">Las mejores canciones y puto el que diga lo contrario</p>

        <div className="cards-container">
          {articulos.map((art) => (
            <div key={art.idArt} className="player-card">
              <img src={art.fotoArt} alt={art.nombre} className="player-image" />
              <h2 className="player-name">{art.nombre}</h2>
              <p className="player-subtitle">{art.tallaArt}</p>
              <p className="player-subtitle">{art.precioArt}</p>
              <p className="player-subtitle">{art.generoArt}</p>
              <p className="player-price">{art.colorArt}</p>
              <span className="edit-text" onClick={() => handleEditClick(art.idArt)}><FaPencilAlt/></span>
            </div>
          ))}
        </div>

        {editingIndex !== null && (
          <div className="modal-overlay">
            <form onSubmit={handleActualizarArticulo} className="modal">
              <h2>Editar canción</h2>
              <input
                type="text"
                value={editedData.precioArti}
                onChange={(e) => setEditedData({ ...editedData, precioArt: e.target.value })}
                placeholder="precio"
              />
              <input
                type="text"
                value={editedData.fotoArti}
                onChange={(e) => setEditedData({ ...editedData, fotoArt: e.target.value })}
                placeholder="foto"
              />
              <div className="modal-buttons">
                <button type="onSubmit">Actualizar</button>
                <button onClick={handleCancel} className="cancel-button">Cancelar</button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default Inventory;
