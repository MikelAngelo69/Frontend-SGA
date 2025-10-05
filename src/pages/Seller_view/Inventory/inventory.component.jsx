import React, { use, useEffect, useState } from "react";
import "./Inventory.styles.css";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { FaPencilAlt } from "react-icons/fa";
import { obtenerArticulo } from "../../../api/articulosApi";
import { data } from "react-router-dom";


const categories = ["Todos", "Éxitos", "Clásicos", "Favoritas"];

const Inventory = () => {

const [articulos, setArticulos] = useState([]);

useEffect(() => {
  obtenerArticulo().then((data) => setArticulos(data))
},[])


  // const [songs, setSongs] = useState(initialSongs);
  // const [editingIndex, setEditingIndex] = useState(null);
  // const [editedData, setEditedData] = useState({ name: "", subtitle: "", price: "" });

  // const handleEditClick = (index) => {
  //   setEditingIndex(index);
  //   setEditedData({ ...songs[index] });
  // };

  // const handleUpdate = () => {
  //   const updatedSongs = [...songs];
  //   updatedSongs[editingIndex] = editedData;
  //   setSongs(updatedSongs);
  //   setEditingIndex(null);
  // };

  // const handleCancel = () => setEditingIndex(null);

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
              {/* <span className="edit-text" onClick={() => handleEditClick(index)}><FaPencilAlt/></span> */}
            </div>
          ))}
        </div>

        {/* {editingIndex !== null && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Editar canción</h2>
              <input
                type="text"
                value={editedData.name}
                onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                placeholder="Nombre"
              />
              <input
                type="text"
                value={editedData.subtitle}
                onChange={(e) => setEditedData({ ...editedData, subtitle: e.target.value })}
                placeholder="Subtítulo"
              />
              <input
                type="text"
                value={editedData.price}
                onChange={(e) => setEditedData({ ...editedData, price: e.target.value })}
                placeholder="Precio"
              />
              <div className="modal-buttons">
                <button onClick={handleUpdate}>Actualizar</button>
                <button onClick={handleCancel} className="cancel-button">Cancelar</button>
              </div>
            </div>
          </div>
        )} */}

      </div>
    </div>
  );
};

export default Inventory;
