import Navbar from './navbar';
import Footer from './footer';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Sign = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onValueChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/users/user");
    }
  }, [navigate]);

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;

    if (!name.trim()) return alert("Please enter your name.");
    if (!email.trim()) return alert("Please enter your email.");
    if (!/\S+@\S+\.\S+/.test(email)) return alert("Please enter a valid email address.");
    if (password.length < 6) return alert("Password must be at least 6 characters long.");

    try {
      const res = await fetch(`${import.meta.env.VITE_URL}/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });

      const data = await res.json();
      const { msg, token, email, address, name } = data;
      localStorage.setItem("userInfo", JSON.stringify({ email, address, name }));

      if (res.ok) {
        if (data.token) localStorage.setItem("authToken", data.token);
        alert("Signup successful!");
        navigate("/users/user");
      } else {
        alert(data.msg || "Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "450px" }}>
          <h2 className="text-center mb-4 fw-bold">Create your account</h2>
          <form onSubmit={submitData}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input 
                onChange={onValueChange}
                name="name"
                className="form-control"
                id="name"
                type="text"
                placeholder="Enter name"
                value={user.name}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input 
                name="email"
                onChange={onValueChange}
                className="form-control"
                id="email"
                type="email"
                placeholder="Enter email"
                value={user.email}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input 
                name="password"
                onChange={onValueChange}
                className="form-control"
                id="password"
                type="password"
                placeholder="Enter password"
                value={user.password}
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-dark btn-lg" type="submit">
                Sign up
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <NavLink to="/users/login" className="text-decoration-none">
              Already have an account? <span className="fw-semibold text-primary">Login</span>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sign;
