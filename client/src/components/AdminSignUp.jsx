import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      navigate("/admin/user");
    }
  })
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!adminEmail) {
      setError("Email is required");
      return;
    }
    if (adminPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/admin/login", {
        email: adminEmail,
        password: adminPassword,
      });

      const { token, msg } = res.data;

      if (token) {
        localStorage.setItem("adminToken", token); // Store JWT
        setError(""); // Clear any error
        navigate("/admin/user"); // Redirect to admin page
      } else {
        setError(msg || "Login failed");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div
              style={{ backgroundColor: "#343a40", color: "#fff" }}
              className="card-header text-center"
            >
              <h3>Admin Login</h3>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger text-center">{error}</div>
              )}
              <form onSubmit={handleSubmit}>
                {/* Admin Name (Optional) */}
                <div className="mb-3">
                  <label className="form-label">Admin Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Admin Name"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                  />
                </div>

                {/* Admin Email */}
                <div className="mb-3">
                  <label className="form-label">Admin Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Admin Email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Admin Password */}
                <div className="mb-3">
                  <label className="form-label">Admin Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
