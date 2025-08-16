import '../styles/LS.css';
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
      let res = await axios.post('http://localhost:3000/users/login', { ...loginData });
      const { msg, token, email, address , name } = res.data;
      localStorage.setItem("userInfo", JSON.stringify({email, address, name}));
      localStorage.setItem("authToken", token);
      loginDone();
    } catch (error) {
      console.log(error, "Login");
      alert("Account does not exist. Please sign up first.");
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    if (password.length <= 4) {
      alert("Password must be more than 4 characters.");
      return;
    }

    console.log("Logged in with:", loginData);
    getToken(() => {
      const token = localStorage.getItem("authToken");
      if (token) {
        // All validations passed
        alert("Login successful!");
        navigate("/users/user");
      }

      if (!token) {
        alert("User not exsist.");
      }
    });


  };

  return (
    <>
      <Navbar />
      <div id='ls-div'>
        <div id='ls-wrapper'>
          <div id='ls-heading'>
            <h1>Login</h1>
          </div>
          <div id='ls-info'>
            <form onSubmit={handleLogin}>
              <div className='lg'>
                <label htmlFor='email'>Email</label>
                <div className='in-div'>
                  <input
                    name='email'
                    value={loginData.email}
                    onChange={onInputChange}
                    className='Ls-int'
                    id='email'
                    type='email'
                    placeholder='Enter email'
                  />
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='password'>Password</label>
                <div className='in-div'>
                  <input
                    name='password'
                    value={loginData.password}
                    onChange={onInputChange}
                    className='Ls-int'
                    id='password'
                    type='password'
                    placeholder='Enter password'
                  />
                </div>
              </div>
              <div id='btn-div'>
                <button className='Ls-int' type='submit'>Login</button>
              </div>
            </form>
            <NavLink to={"/users/signup"} className="ls-link">
              Don't have an account? Sign up
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
