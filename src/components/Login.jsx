import '../styles/LS.css';
import Navbar from './navbar';
import Footer from './footer';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

    // All validations passed
    alert("Login successful!");
    console.log("Logged in with:", loginData);
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
            <NavLink to={"/sign"} className="ls-link">
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
