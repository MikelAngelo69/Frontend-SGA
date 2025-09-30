import React, { useState } from "react";
import "./Clients.styles.css";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";

const initialClients = [
  { id: 1, document: "12345678", name: "Anuel AA", email: "anuel@brr.co", phone: "3123456789", firstRental: new Date("2023-01-12") },
  { id: 2, document: "87654321", name: "Bad Bunny", email: "badbunny@brr.co", phone: "3109876543", firstRental: new Date("2022-11-05") },
  { id: 3, document: "11223344", name: "J Balvin", email: "jbalvin@brr.co", phone: "3201122334", firstRental: new Date("2023-03-20") },
  { id: 4, document: "44332211", name: "Karol G", email: "karolg@brr.co", phone: "3004433221", firstRental: new Date("2023-06-15") },
  { id: 5, document: "55667788", name: "Ozuna", email: "ozuna@brr.co", phone: "3155566778", firstRental: new Date("2022-09-10") },
  { id: 6, document: "99887766", name: "Maluma Prime", email: "maluma@brr.co", phone: "3119988776", firstRental: new Date("2023-07-01") },
    { id: 2, document: "87654321", name: "Bad Bunny", email: "badbunny@brr.co", phone: "3109876543", firstRental: new Date("2022-11-05") },
  { id: 3, document: "11223344", name: "J Balvin", email: "jbalvin@brr.co", phone: "3201122334", firstRental: new Date("2023-03-20") },
  { id: 4, document: "44332211", name: "Karol G", email: "karolg@brr.co", phone: "3004433221", firstRental: new Date("2023-06-15") },
  { id: 5, document: "55667788", name: "Ozuna", email: "ozuna@brr.co", phone: "3155566778", firstRental: new Date("2022-09-10") },
  { id: 6, document: "99887766", name: "Maluma Prime", email: "maluma@brr.co", phone: "3119988776", firstRental: new Date("2023-07-01") },
];

const Clients = () => {
  const [clients, setClients] = useState(initialClients);
  const [editingClient, setEditingClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  const handleEdit = (client) => {
    setEditingClient(client);
  };

  const handleUpdate = () => {
    setClients(clients.map(c => c.id === editingClient.id ? editingClient : c));
    setEditingClient(null);
  };

  const handleCancel = () => {
    setEditingClient(null);
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

        <NavbarSeller></NavbarSeller>
        <div className="clients-wrapper">


      <div className="clients-header">
        <h1 className="clients-title">Lista de Clientes</h1>
        <input
          className="search-input"
          placeholder="Buscar cliente"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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

        {filteredClients.map(client => (
          <div key={client.id} className="client-card">
            <div className="client-body">
              <div className="client-field">{client.document}</div>
              <div className="client-field">{client.name}</div>
              <div className="client-field">{client.email}</div>
              <div className="client-field">{client.phone}</div>
              <div className="client-field">{client.firstRental.toLocaleDateString()}</div>
              <div className="client-buttons">
                <button className="update-btn" onClick={() => handleEdit(client)}>Actualizar</button>
                <button className="delete-btn" onClick={() => handleDelete(client.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {editingClient && (
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
      )}
    </div>
    </>
   
  );
};

export default Clients;
