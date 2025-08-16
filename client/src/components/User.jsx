import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/UserDashboard.css";
import axios from "axios";

export const User = () => {
  const navigate = useNavigate();
  const { email: userEmail, address: userAdderss, name } = JSON.parse(localStorage.getItem("userInfo"));

  const [fullName, setFullName] = useState(name);
  const [address, setAddress] = useState(userAdderss.toString());
  const [email, setEmail] = useState(userEmail);
  const [isEditing, setIsEditing] = useState(false);

  const [orders, setOrders] = useState([
    { id: 1001, name: "Phone Phone Phone Phone Phone Phone", date: "Aug 5, 2025", status: "Delivered", total: "$120.00" },
    { id: 1002, name: "Phone Phone Phone Phone Phone Phone", date: "Aug 3, 2025", status: "Processing", total: "$75.50" },
    { id: 1003, name: "Phone Phone Phone Phone Phone Phone", date: "Jul 30, 2025", status: "Shipped", total: "$45.00" }
  ]);

  const getOrderDetails = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get("http://localhost:3000/orders", {
        headers: {
          Authorization: token,
        },
      });

      if (res.data.length > 0) {
        const allOrderProducts = [];

        res.data.forEach((order) => {
          const { createdAt, products, status, _id } = order;

          products.forEach((item) => {
            const price = item.productId.price;
            const quantity = item.quantity;
            const orderedProduct = {
              name: item.productId.name,
              total: price * quantity,
              date: new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              status,
              _id,
            };
            allOrderProducts.push(orderedProduct);
          });
        });

        setOrders(allOrderProducts);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };


  // Redirect if user is not logged in (no token)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/users/login");
    }
    else {
      getOrderDetails();
    }
  }, [navigate]);

  const cancelOrder = async (id) => {
    try {
      let value = prompt(`Cancel all products with ID ${id}? (yes/no)`);
      if (value.toLowerCase() === 'yes') {
        const token = localStorage.getItem("authToken");
        let res = await axios.delete(`http://localhost:3000/orders/${id}`, {
          headers: {
            Authorization: token
          }
        })
        alert(`Order cancel Successfully ${id}`);
        
        // setOrders((prev) =>
        //   prev.map((o) =>
        //     o.id === id ? { ...o, status: "Cancelled" } : o
        //   )
        // );
      }
    } catch (error) {
      console.log("Cancel - error", error);
    }

  };

  const logout = () => {
    localStorage.removeItem("authToken"); // remove token
    localStorage.removeItem("userInfo");
    alert("You have logged out!");
    navigate("/users/login"); // go to login page
  };

  const saveProfile = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="container my-5 user-dashboard">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 mb-4">
            <div className="list-group shadow-sm">
              <a href="#profile" className="list-group-item list-group-item-action">
                User Profile
              </a>
              <a href="#orders" className="list-group-item list-group-item-action">
                Your Orders
              </a>
              <button
                className="list-group-item list-group-item-action text-danger"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            {/* User Profile */}
            <div id="profile" className="card shadow-sm mb-4">
              <div className="card-header bg-light d-flex justify-content-between align-items-center">
                <h5 className="mb-0">User Profile</h5>
                {!isEditing && (
                  <button
                    className="btn btn-sm btn-dark"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                )}
              </div>
              <div className="card-body">
                {isEditing ? (
                  <>
                    <div className="mb-3">
                      <label className="form-label"><strong>Full Name:</strong></label>
                      <input
                        type="text"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label"><strong>Address:</strong></label>
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label"><strong>Email:</strong></label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-dark me-2"
                      onClick={saveProfile}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <p><strong>Full Name:</strong> {fullName}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Email:</strong> {email}</p>
                  </>
                )}
              </div>
            </div>

            {/* Orders Table */}
            <div id="orders" className="card shadow-sm">
              <div className="card-header bg-light">
                <h5 className="mb-0">Your Orders</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Action</th>
                      <th>Order ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className={order._id}>

                        <td>{order.name}</td>
                        <td>{order.date}</td>
                        <td>
                          <span
                            className={`badge ${order.status === "Delivered"
                              ? "bg-success"
                              : order.status === "Cancelled"
                                ? "bg-dark"
                                : "bg-warning text-dark"
                              }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>{order.total}</td>
                        <td>
                          {order.status !== "Cancelled" &&
                            order.status !== "Delivered" && (
                              <button
                                className="btn btn-sm btn-dark"
                                onClick={() => cancelOrder(order._id)}
                              >
                                Cancel
                              </button>
                            )}
                        </td>
                        <td>#{order._id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default User;
