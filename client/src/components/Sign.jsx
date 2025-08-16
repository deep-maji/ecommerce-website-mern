import '../styles/LS.css'
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

  // If user already has token → go directly to user page
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/users/user");
    }
  }, [navigate]);

  const submitData = async (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    // Client-side validation
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await res.json();
      const { msg, token, email, address , name } = data;
      localStorage.setItem("userInfo", JSON.stringify({email, address, name}));
      console.log("Server response:", data);

      if (res.ok) {
        // Save token
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }
        alert("Signup successful!");
        navigate("/users/user"); // Go to user page
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
      <div id='ls-div'>
        <div id='ls-wrapper'>
          <div id='ls-heading'>
            <h1>Create your account</h1>
          </div>
          <div id='ls-info'>
            <form onSubmit={submitData}>
              <div className='lg'>
                <label htmlFor='name'>Name</label>
                <div className='in-div'>
                  <input 
                    onChange={onValueChange} 
                    name='name' 
                    className='Ls-int' 
                    id='name' 
                    type='text' 
                    placeholder='Enter name'
                    value={user.name}
                  />
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='email'>Email</label>
                <div className='in-div'>
                  <input 
                    name='email' 
                    onChange={onValueChange} 
                    className='Ls-int' 
                    id='email' 
                    type='email' 
                    placeholder='Enter email'
                    value={user.email}
                  />
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='password'>Password</label>
                <div className='in-div'>
                  <input 
                    name='password' 
                    onChange={onValueChange} 
                    className='Ls-int' 
                    id='password' 
                    type='password' 
                    placeholder='Enter password'
                    value={user.password}
                  />
                </div>
              </div>
              <div id='btn-div'>
                <button className='Ls-int' type='submit'>Sign up</button>
              </div>
            </form>
            <NavLink to={"/users/login"} className="ls-link">
              Login <span className="subtext">existing-customer</span>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sign;
