import React, { useState } from "react";
import "./Orders.styles.css";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialOrders = [
  { orderNumber: "1001", item: "Camiseta edición limitada", observations: "Entrega rápida", client: "Anuel AA", phone: "3101234567", date: new Date() },
  { orderNumber: "1002", item: "Pantalón deportivo", observations: "Cambiar talla si no queda", client: "Karol G", phone: "3119876543", date: new Date() },
  { orderNumber: "1003", item: "Chaqueta impermeable", observations: "Color diferente solicitado", client: "Bad Bunny", phone: "3125554433", date: new Date() },
  { orderNumber: "1004", item: "Zapatos running", observations: "Urgente", client: "J Balvin", phone: "3132223344", date: new Date() },
  { orderNumber: "1005", item: "Gorra oficial", observations: "Sin observaciones", client: "Maluma", phone: "3141112233", date: new Date() },
  { orderNumber: "1006", item: "Sudadera", observations: "Entrega normal", client: "Ozuna", phone: "3159988776", date: new Date() },
    { orderNumber: "1007", item: "Zapatos running", observations: "Urgente", client: "J Balvin", phone: "3132223344", date: new Date() },
  { orderNumber: "1008", item: "Gorra oficial", observations: "Sin observaciones", client: "Maluma", phone: "3141112233", date: new Date() },
  { orderNumber: "1009", item: "Sudadera", observations: "Entrega normal", client: "Ozuna", phone: "3159988776", date: new Date() },
    { orderNumber: "10010", item: "Zapatos running", observations: "Urgente", client: "J Balvin", phone: "3132223344", date: new Date() },
  { orderNumber: "1011", item: "Gorra oficial", observations: "Sin observaciones", client: "Maluma", phone: "3141112233", date: new Date() },
  { orderNumber: "1012", item: "Sudadera", observations: "Entrega normal", client: "Ozuna", phone: "3159988776", date: new Date() },
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [startDate, setStartDate] = useState(new Date());
  const [searchText, setSearchText] = useState("");
  const [editingOrder, setEditingOrder] = useState(null);
  const [editData, setEditData] = useState({});

  const handleDelete = (orderNumber) => {
    setOrders(orders.filter(order => order.orderNumber !== orderNumber));
  };

  const handleEdit = (order) => {
    setEditingOrder(order.orderNumber);
    setEditData({...order});
  };

  const handleUpdateSave = () => {
    setOrders(orders.map(order => order.orderNumber === editingOrder ? editData : order));
    setEditingOrder(null);
  };

  const handleCancel = () => {
    setEditingOrder(null);
  };

  return (
    <div className="orders-wrapper">
      <NavbarSeller />
      <aside className="orders-sidebar">
        <h2>Buscar Orden</h2>
        <input 
          type="text" 
          placeholder="Número de orden o cliente" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
        />
        <h2>Filtrar por fecha</h2>
        <div className="calendar-container">
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            inline 
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled
            }) => (
              <div className="custom-header">
                <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>&lt;</button>
                <span>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>&gt;</button>
              </div>
            )}
          />
        </div>
        <button>Buscar</button>
      </aside>

      <div className="orders-container">
        <h1 className="orders-title">Órdenes recientes</h1>
        <p className="orders-subtitle">Lista completa de órdenes registradas</p>

        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
<div className="order-header">
  <span>Número de orden</span>
  <span>Artículo</span>
  <span>Observaciones</span>
  <span>Cliente</span>
  <span>Teléfono</span>
  <span>Fecha</span>
  <span>Acciones</span>
</div>
<div className="order-body">
  <div className="order-field">{order.orderNumber}</div>
  <div className="order-field">{order.item}</div>
  <div className="order-field">{order.observations}</div>
  <div className="order-field">{order.client}</div>
  <div className="order-field">{order.phone}</div>
  <div className="order-field">{order.date.toLocaleDateString()}</div>
  <div className="order-buttons">
    <button className="update-btn" onClick={() => handleEdit(order)}>Actualizar</button>
    <button className="delete-btn" onClick={() => handleDelete(order.orderNumber)}>Eliminar</button>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

      {editingOrder && (
        <div className="edit-overlay">
          <div className="edit-modal">
            <h2>Actualizar Orden {editingOrder}</h2>
            <input type="text" value={editData.orderNumber} onChange={(e)=>setEditData({...editData, orderNumber:e.target.value})} placeholder="Número de orden" />
            <input type="text" value={editData.item} onChange={(e)=>setEditData({...editData, item:e.target.value})} placeholder="Artículo" />
            <input type="text" value={editData.observations} onChange={(e)=>setEditData({...editData, observations:e.target.value})} placeholder="Observaciones" />
            <input type="text" value={editData.client} onChange={(e)=>setEditData({...editData, client:e.target.value})} placeholder="Cliente" />
            <input type="text" value={editData.phone} onChange={(e)=>setEditData({...editData, phone:e.target.value})} placeholder="Teléfono" />
            <div className="edit-buttons">
              <button onClick={handleUpdateSave}>Guardar</button>
              <button onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
