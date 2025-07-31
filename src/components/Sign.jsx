import '../styles/LS.css'
import Navbar from './navbar';
import Footer from './footer';
import { NavLink } from 'react-router-dom';

export const Sign = () => {
  return (
    <>
      <Navbar/>
      <div id='ls-div'>
        <div id='ls-wrapper'>
          <div id='ls-heading'>
            <h1>Sign Up</h1>
          </div>
          <div id='ls-info'>
            <form action=''>
              <div className='lg'>
                <label htmlFor='name'>Name</label>
                <div className='in-div'>
                  <input id='name' type='text' placeholder='Enter name'></input>
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='email'>Email</label>
                <div className='in-div'>
                  <input id='email' type='email' placeholder='Enter email'></input>
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='password'>Password</label>
                <div className='in-div'>
                  <input id='password' type='password' placeholder='Enter password'></input>
                </div>
              </div>
              <div id='btn-div'>
                <button type='submit'>Sign up</button>
              </div>
            </form>
            <NavLink to={"/login"} className="ls-link">Login <span className="subtext">existing-customer</span></NavLink>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Sign;