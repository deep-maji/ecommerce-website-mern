import '../styles/LS.css'
import Navbar from './navbar';
import Footer from './footer';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Sign = () => {
  const [user, setUser] = useState({
    name : "",
    email: "",
    password : ""
  })

    const onValueChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(user); // Logs updated user object whenever it changes
  }, [user]);

    const submitData = (e) => {
    e.preventDefault(); // Prevent page reload

    const { name, email, password } = user;

    // Validation
    if (user.name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (user.email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    if (user.password.length <= 4) {
      alert("Password must be more than 4 characters.");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    console.log("Submitted data:", user);
  };

  return (
    <>
      <Navbar/>
      <div id='ls-div'>
        <div id='ls-wrapper'>
          <div id='ls-heading'>
            <h1>Create your account</h1>
          </div>
          <div id='ls-info'>
            <form action='' onSubmit={submitData}>
              <div className='lg'>
                <label htmlFor='name'>Name</label>
                <div className='in-div'>
                  <input onChange={onValueChange} name='name' className='Ls-int' id='name' type='text' placeholder='Enter name'></input>
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='email'>Email</label>
                <div className='in-div'>
                  <input name='email' onChange={onValueChange} className='Ls-int' id='email' type='email' placeholder='Enter email'></input>
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='password'>Password</label>
                <div className='in-div'>
                  <input name='password' onChange={onValueChange} className='Ls-int' id='password' type='password' placeholder='Enter password'></input>
                </div>
              </div>
              <div id='btn-div'>
                <NavLink to={'/users/user'}><button  className='Ls-int' type='submit'>Sign up</button></NavLink>
              </div>
            </form>
            <NavLink to={"/users/login"} className="ls-link">Login <span className="subtext">existing-customer</span></NavLink>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Sign;