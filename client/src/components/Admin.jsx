import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Admin.css";

const EcommerceAdmin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    featured: false,
    imagePreview: "",
  });
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [currentEditProduct, setCurrentEditProduct] = useState(null);
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  // Handle logout
  const handleLogOut = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    alert("Logout successful.");
    navigate("/admin");
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image upload (for preview + file)
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages(imagePreviews);
  };

  // Handle delete product
  const handleDeleteProduct = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");

      await axios.delete(`https://ecommerce-server-p79x.onrender.com/admin/product/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      // Remove from state
      setProducts(products.filter((p) => p.id !== id && p._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // Handle edit click
  const handleEditClick = (product) => {
    setCurrentEditProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
      featured: product.featured,
      imagePreview: product.image || "",
    });
    setImages(product.image ? [{ preview: product.image }] : []);
    setActiveTab("products");
  };

  // Handle form submit (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminToken");
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("stock", formData.stock);
      formDataToSend.append("featured", formData.featured);

      // Only append if a new file is selected
      if (images.length > 0 && images[0].file) {
        formDataToSend.append("image", images[0].file);
      }

      let res;
      if (currentEditProduct) {
        // Update existing product
        res = await axios.put(
          `https://ecommerce-server-p79x.onrender.com/admin/product/${currentEditProduct.id || currentEditProduct._id}`,
          formDataToSend,
          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setProducts(
          products.map((p) =>
            p.id === currentEditProduct.id || p._id === currentEditProduct._id
              ? res.data
              : p
          )
        );
        setCurrentEditProduct(null);
      } else {
        // Add new product
        res = await axios.post(
          "https://ecommerce-server-p79x.onrender.com/admin/product/add",
          formDataToSend,
          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setProducts([...products, res.data]);
      }

      // Reset form
      setFormData({
        name: "",
        price: "",
        category: "",
        stock: "",
        featured: false,
        imagePreview: "",
      });
      setImages([]);
      window.location.reload(true);
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "orders" && orders.length === 0) {
      setOrders([
        {
          id: 1,
          customer: "John Doe",
          total: 149.99,
          status: "Shipped",
          date: "2023-05-15",
        },
        {
          id: 2,
          customer: "Jane Smith",
          total: 299.98,
          status: "Processing",
          date: "2023-05-16",
        },
      ]);
    }
    if (tab === "customers" && customers.length === 0) {
      setCustomers([
        { id: 1, name: "John Doe", email: "john@example.com", orders: 5 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 2 },
      ]);
    }
  };

  // Fetch products from server
  useEffect(() => {
    axios
      .get("https://ecommerce-server-p79x.onrender.com/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h1>Cyber E-commerce</h1>
            <h4>Admin Panel</h4>
          </div>
          <div>
            <h5 style={{ cursor: "pointer" }} onClick={handleLogOut}>
              Log out
            </h5>
          </div>
        </div>
        <nav className="admin-nav">
          <button
            className={activeTab === "products" ? "active" : ""}
            onClick={() => handleTabChange("products")}
          >
            Products
          </button>
          {/* <button
            className={activeTab === "orders" ? "active" : ""}
            onClick={() => handleTabChange("orders")}
          >
            Orders
          </button>
          <button
            className={activeTab === "customers" ? "active" : ""}
            onClick={() => handleTabChange("customers")}
          >
            Customers
          </button> */}
        </nav>
      </header>

      <main className="admin-content">
        {activeTab === "products" && (
          <div className="products-section">
            <h2>{currentEditProduct ? "Edit Product" : "Product Management"}</h2>
            <div className="product-form-container">
              <form onSubmit={handleSubmit} className="product-form">
                <h3>
                  {currentEditProduct ? "Edit Product" : "Add New Product"}
                </h3>

                <div className="form-group">
                  <label>Product Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Price:</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Category:</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Stock Quantity:</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>

                {/* <div className="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                    />
                    Featured Product
                  </label>
                </div> */}

                <div className="form-group">
                  <label>Product Images:</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    multiple
                  />
                  <div className="image-preview-container">
                    {images.map((img, index) => (
                      <div key={index} className="image-preview">
                        <img
                          src={img.preview}
                          alt={`Product preview ${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  {currentEditProduct ? "Update Product" : "Add Product"}
                </button>
              </form>
            </div>

            <div className="products-list">
              <h3>Product List</h3>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stock</th>
                    {/* <th>Featured</th> */}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id || index}>
                      <td>
                        <div className="product-image">
                          <img
                            src={`${product.image}`}
                            alt={product.name}
                          />
                        </div>
                      </td>
                      <td>{product.name}</td>
                      <td>₹{Number(product.price || 0).toFixed(2)}</td>
                      <td>{product.category}</td>
                      <td>{product.stock}</td>
                      {/* <td>{product.featured ? "Yes" : "No"}</td> */}
                      <td>
                        {/* <button
                          className="edit-btn"
                          onClick={() => handleEditClick(product)}
                        >
                          Edit
                        </button> */}
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteProduct(product.id || product._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* {activeTab === "orders" && (
          <div className="orders-section">
            <h2>Order Management</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>₹{order.total.toFixed(2)}</td>
                    <td>
                      <select defaultValue={order.status}>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>{order.date}</td>
                    <td>
                      <button className="view-btn">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}

        {/* {activeTab === "customers" && (
          <div className="customers-section">
            <h2>Customer Management</h2>
            <table>
              <thead>
                <tr>
                  <th>Customer ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Total Orders</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.orders}</td>
                    <td>
                      <button className="view-btn">View Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}
      </main>
    </div>
  );
};

export default EcommerceAdmin;
