import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AdminLogin() {
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Details:", { adminName, adminEmail, adminPassword });
    alert("Login Submitted!");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div style={{backgroundColor : '#eee', color : '#fff'}} className="card-header text-center">
              <h3>Admin Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Admin Name */}
                <div className="mb-3">
                  <label className="form-label">Admin Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Admin Name"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    required
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
                  <NavLink to={'/admin/user'}><button type="submit" className="btn btn-dark">
                    Login
                  </button></NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}