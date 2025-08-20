import Navbar from './navbar';
import Footer from './footer';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/users/user");
    }
  }, [navigate]);

  const onInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getToken = async (loginDone) => {
    try {
      let res = await axios.post(`${import.meta.env.VITE_URL}/users/login`, { ...loginData });
      const { msg, token, email, address, name } = res.data;
      localStorage.setItem("userInfo", JSON.stringify({ email, address, name }));
      localStorage.setItem("authToken", token);
      loginDone();
    } catch (error) {
      console.log(error, "Login");
      alert("Invalid account or password. Please sign up first.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be more than 6 characters.");
      return;
    }

    getToken(() => {
      const token = localStorage.getItem("authToken");
      if (token) {
        alert("Login successful!");
        navigate("/users/user");
      } else {
        alert("User does not exist.");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "450px" }}>
          <h2 className="text-center mb-4 fw-bold">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input
                name="email"
                value={loginData.email}
                onChange={onInputChange}
                className="form-control"
                id="email"
                type="email"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input
                name="password"
                value={loginData.password}
                onChange={onInputChange}
                className="form-control"
                id="password"
                type="password"
                placeholder="Enter password"
              />
            </div>

            <div className="d-grid">
              <button className="btn btn-dark btn-lg" type="submit">
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <NavLink to="/users/signup" className="text-decoration-none">
              Don't have an account? <span className="fw-semibold text-primary">Sign up</span>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
