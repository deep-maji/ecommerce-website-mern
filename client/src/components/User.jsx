import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/UserDashboard.css";

export const User = () => {
    const [fullName, setFullName] = useState("John Doe");
    const [address, setAddress] = useState("123 Main Street, New York");
    const [email, setEmail] = useState("user@example.com");
    const [isEditing, setIsEditing] = useState(false);

    const [orders, setOrders] = useState([
        { id: 1001, date: "Aug 5, 2025", status: "Delivered", total: "$120.00" },
        { id: 1002, date: "Aug 3, 2025", status: "Processing", total: "$75.50" },
        { id: 1003, date: "Jul 30, 2025", status: "Shipped", total: "$45.00" }
    ]);

    const cancelOrder = (id) => {
        setOrders((prev) =>
            prev.map((o) =>
                o.id === id ? { ...o, status: "Cancelled" } : o
            )
        );
    };

    const logout = () => {
        alert("You have logged out!");
        // Actual logout logic can be added here
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
                                            <th>Order ID</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id}>
                                                <td>#{order.id}</td>
                                                <td>{order.date}</td>
                                                <td>
                                                    <span
                                                        className={`badge ${
                                                            order.status === "Delivered"
                                                                ? "bg-success"
                                                                : order.status === "Cancelled"
                                                                ? "bg-danger"
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
                                                                className="btn btn-sm btn-danger"
                                                                onClick={() => cancelOrder(order.id)}
                                                            >
                                                                Cancel
                                                            </button>
                                                        )}
                                                </td>
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
