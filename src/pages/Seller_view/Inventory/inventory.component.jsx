import React, { useState } from "react";
import "./Inventory.styles.css";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { FaPencilAlt } from "react-icons/fa";

const initialSongs = [
  { name: "Diles", img: "https://static.vecteezy.com/system/resources/thumbnails/046/585/478/small_2x/dark-blue-suit-and-tie-png.png", subtitle: "Tema legendario", price: "$5.000" },
  { name: "Solos", img: "https://static.vecteezy.com/system/resources/thumbnails/046/585/478/small_2x/dark-blue-suit-and-tie-png.png", subtitle: "Éxito absoluto", price: "$4.500" },
  { name: "Guatauba", img: "https://static.vecteezy.com/system/resources/thumbnails/046/585/478/small_2x/dark-blue-suit-and-tie-png.png", subtitle: "Hit de la calle", price: "$4.800" },
  { name: "Por que te demoras?", img: "https://static.vecteezy.com/system/resources/thumbnails/046/585/478/small_2x/dark-blue-suit-and-tie-png.png", subtitle: "Ritmo pegajoso", price: "$5.200" },
  { name: "Llamado de emergencia", img: "https://i.pinimg.com/originals/89/b8/90/89b890691949f6e8b2f07a9f229b8fc0.gif", subtitle: "Clásico urbano", price: "$4.900" },
  { name: "Daga Adicta", img: "https://static.vecteezy.com/system/resources/previews/035/645/766/non_2x/ai-generated-woman-dress-isolated-on-transparent-background-created-with-generative-ai-free-png.png", subtitle: "BPM intenso", price: "$5.100" },
  { name: "yo perreo sola", img: "https://static.vecteezy.com/system/resources/previews/035/645/766/non_2x/ai-generated-woman-dress-isolated-on-transparent-background-created-with-generative-ai-free-png.png", subtitle: "Fuerte y directo", price: "$5.000" },
  { name: "Safaera", img: "https://static.vecteezy.com/system/resources/previews/035/645/766/non_2x/ai-generated-woman-dress-isolated-on-transparent-background-created-with-generative-ai-free-png.png", subtitle: "Fiesta total", price: "$5.300" },
  { name: "Baila morena", img: "https://static.vecteezy.com/system/resources/previews/035/645/766/non_2x/ai-generated-woman-dress-isolated-on-transparent-background-created-with-generative-ai-free-png.png", subtitle: "Ritmo sensual", price: "$4.700" },
  { name: "Noche de entierro", img: "https://static.vecteezy.com/system/resources/previews/035/645/766/non_2x/ai-generated-woman-dress-isolated-on-transparent-background-created-with-generative-ai-free-png.png", subtitle: "Hit intenso", price: "$5.000" },
];

const categories = ["Todos", "Éxitos", "Clásicos", "Favoritas"];

const Inventory = () => {
  const [songs, setSongs] = useState(initialSongs);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({ name: "", subtitle: "", price: "" });

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedData({ ...songs[index] });
  };

  const handleUpdate = () => {
    const updatedSongs = [...songs];
    updatedSongs[editingIndex] = editedData;
    setSongs(updatedSongs);
    setEditingIndex(null);
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
          {songs.map((song, index) => (
            <div key={index} className="player-card">
              <img src={song.img} alt={song.name} className="player-image" />
              <h2 className="player-name">{song.name}</h2>
              <p className="player-subtitle">{song.subtitle}</p>
              <p className="player-price">{song.price}</p>
              <span className="edit-text" onClick={() => handleEditClick(index)}><FaPencilAlt/></span>
            </div>
          ))}
        </div>

        {editingIndex !== null && (
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
        )}

      </div>
    </div>
  );
};

export default Inventory;
