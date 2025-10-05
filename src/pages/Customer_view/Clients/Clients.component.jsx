import React, { useState, useEffect } from "react";
import "./Clients.styles.css";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import { obtenerUsuario } from "../../../api/usuariosApi";


const Clients = () => {
  const [clients, setClients] = useState([]);
  // const [editingClient, setEditingClient] = useState(null);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    obtenerUsuario().then((data) => setClients(data)) 
// Guardar empleados en el estado
  }, []);


  // const handleDelete = (id) => {
  //   setClients(clients.filter(client => client.id !== id));
  // 

  // const handleEdit = (client) => {
  //   setEditingClient(client);
  // };

  // const handleUpdate = () => {
  //   setClients(clients.map(c => c.id === editingClient.id ? editingClient : c));
  //   setEditingClient(null);
  // };

  // const handleCancel = () => {
  //   setEditingClient(null);
  // };

  return (
    <>

      <NavbarSeller></NavbarSeller>
      <div className="clients-wrapper">
      <div className="clients-header">
        <h1 className="clients-title">Lista de Clientes</h1>
        <input
          className="search-input"
          placeholder="Buscar cliente"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <p className="clients-subtitle">Todos los clientes registrados</p>

      <div className="clients-list">
        <div className="client-header">
          <span>Documento</span>
          <span>Nombre</span>
          <span>Correo</span>
          <span>Teléfono</span>
          <span>Fecha primer alquiler</span>
          <span>Acciones</span>
        </div>

        {clients.map((cli) => (
          <div key={cli.numeroDoc} className="client-card">
            <div className="client-body">
              <div className="client-field">{cli.nombre1}</div>
              <div className="client-field">{cli.nombre2}</div>
              <div className="client-field">{cli.apellido1}</div>
              <div className="client-field">{cli.apellido2}</div>
              <div className="client-field">{cli.dire}</div>
              <div className="client-field">{cli.tele}</div>
              <div className="client-field">{cli.correoElectronico}</div>
              <div className="client-field">{cli.nomBar}</div>
              <button>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {/* {editingClient && (
        <div className="edit-overlay">
          <div className="edit-modal">
            <input
              value={editingClient.document}
              onChange={(e) => setEditingClient({ ...editingClient, document: e.target.value })}
              placeholder="Documento"
            />
            <input
              value={editingClient.name}
              onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
              placeholder="Nombre"
            />
            <input
              value={editingClient.email}
              onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
              placeholder="Correo"
            />
            <input
              value={editingClient.phone}
              onChange={(e) => setEditingClient({ ...editingClient, phone: e.target.value })}
              placeholder="Teléfono"
            />
            <input
              type="date"
              value={editingClient.firstRental.toISOString().split("T")[0]}
              onChange={(e) => setEditingClient({ ...editingClient, firstRental: new Date(e.target.value) })}
            />
            <div className="edit-buttons">
              <button onClick={handleUpdate}>Actualizar</button>
              <button onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        </div>
      )} */}
    </div>
    </>
   
  );
};

export default Clients;
