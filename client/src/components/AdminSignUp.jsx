import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      navigate("/admin/user");
    }
  })

  const validate = () => {
    let formErrors = {};

    // Email validation
    if (!adminEmail) {
      formErrors.adminEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(adminEmail)) {
      formErrors.adminEmail = "Invalid email format";
    }

    // Password validation
    if (!adminPassword) {
      formErrors.adminPassword = "Password is required";
    } else if (adminPassword.length < 6) {
      formErrors.adminPassword = "Password must be more than 6 characters";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Call API
        const res = await axios.post("https://ecommerce-server-p79x.onrender.com/admin/login", {
          email: adminEmail,
          password: adminPassword,
        });

        if (res.data.token) {
          // Store token in localStorage
          localStorage.setItem("adminToken", res.data.token);
          localStorage.setItem("adminInfo", JSON.stringify(res.data.admin));

          alert(res.data.msg || "Login successful!");
          navigate("/admin/user"); // ✅ navigate after login
        }
      } catch (err) {
        alert(err.response?.data?.msg || "Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div
              style={{ backgroundColor: "#eee", color: "#fff" }}
              className="card-header text-center"
            >
              <h3>Admin Login</h3>
            </div>
            <div className="card-body">
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
                    className={`form-control ${
                      errors.adminEmail ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Admin Email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                  />
                  {errors.adminEmail && (
                    <div className="text-danger small">{errors.adminEmail}</div>
                  )}
                </div>

                {/* Admin Password */}
                <div className="mb-3">
                  <label className="form-label">Admin Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.adminPassword ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                  />
                  {errors.adminPassword && (
                    <div className="text-danger small">
                      {errors.adminPassword}
                    </div>
                  )}
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
