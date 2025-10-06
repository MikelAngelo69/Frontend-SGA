import React, { useState } from "react";
import "./New_order.styles.css";
import HomeSellerImage from "../../../assets/HomeSellerImage.png";
import NavbarSeller from "../../../components/Seller_components/Navbar_Seller/Navbar_seller.component";

export default function NewOrder() {
  const [products, setProducts] = useState([
    { cantidad: 1, articulo: "", detalles: "", precio: "", ultimoAbono: "" },
  ]);

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const addProductRow = () => {
    setProducts([
      ...products,
      { cantidad: 1, articulo: "", detalles: "", precio: "", ultimoAbono: "" },
    ]);
  };

  return (
    <div
      className="new-order-container"
      style={{ backgroundImage: `url(${HomeSellerImage})` }}
    >
      <NavbarSeller />
      <div className="overlay"></div>

      <div className="order-form-section">
        <h1 className="order-title">Registrar Nueva Orden</h1>

        <div className="customer-info-dates compact-section">
          <div className="customer-info">
            <h2>Información del Cliente</h2>
            <div className="customer-row">
              <input type="text" value="miguel" className="input-field" readOnly />
              <input type="email" value="prueba@ejemplo.com" className="input-field" readOnly />
            </div>
            <div className="customer-row">
              <input type="text" value="asassaas" className="input-field" readOnly />

            </div>
                          <input type="text" value="asassaas" className="input-field" readOnly />
          </div>

          <div className="rental-dates">
            <h2>Fechas de Alquiler</h2>
            <label>Fecha de inicio</label>
            <input
              type="date"
              className="input-field"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
            <label>Fecha de entrega</label>
            <input type="date" className="input-field" />
          </div>
        </div>

        <div className="products-section">
          <h2>Productos a Alquilar</h2>
          <div className="products-header">
            <span>Cantidad</span>
            <span>Artículo</span>
            <span>Detalles</span>
            <span>Precio</span>
            <span>Último Abono</span>
          </div>

          <div className="products-container">
            {products.map((product, index) => (
              <div className="products-row" key={index}>
                <input
                  type="number"
                  value={product.cantidad}
                  onChange={(e) =>
                    handleProductChange(index, "cantidad", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={product.articulo}
                  onChange={(e) =>
                    handleProductChange(index, "articulo", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={product.detalles}
                  onChange={(e) =>
                    handleProductChange(index, "detalles", e.target.value)
                  }
                />
                <input
                  type="number"
                  value={product.precio}
                  onChange={(e) =>
                    handleProductChange(index, "precio", e.target.value)
                  }
                />
                <input
                  type="date"
                  value={product.ultimoAbono}
                  onChange={(e) =>
                    handleProductChange(index, "ultimoAbono", e.target.value)
                  }
                />
              </div>
            ))}
          </div>

          <button
            className="add-product-button"
            type="button"
            onClick={addProductRow}
          >
            + Agregar Producto
          </button>
        </div>

        <button className="submit-button">Enviar Orden</button>
      </div>
    </div>
  );
}
