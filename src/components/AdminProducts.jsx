import React, { useState } from "react";
import "../styles/AdminProducts.css";

export const ProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 75000, stock: 12 },
    { id: 2, name: "Headphones", price: 3500, stock: 40 },
    { id: 3, name: "Smartphone", price: 25000, stock: 25 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;

    const nextId = products.length + 1;
    setProducts([
      ...products,
      {
        id: nextId,
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
      },
    ]);

    setNewProduct({ name: "", price: "", stock: "" });
  };

  return (
    <div className="product-page">
      <h2>Product Management</h2>

      {/* Add Product Form */}
      <form className="add-product-form" onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
