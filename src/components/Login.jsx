import '../styles/LS.css'
import Navbar from './navbar';
import Footer from './footer';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <Navbar />
      <div id='ls-div'>
        <div id='ls-wrapper'>
          <div id='ls-heading'>
            <h1>Login</h1>
          </div>
          <div id='ls-info'>
            <form action=''>
              <div className='lg'>
                <label htmlFor='email'>Email</label>
                <div className='in-div'>
                  <input className='Ls-int' id='email' type='email' placeholder='Enter email'></input>
                </div>
              </div>
              <div className='lg'>
                <label htmlFor='password'>Password</label>
                <div className='in-div'>
                  <input className='Ls-int' id='password' type='password' placeholder='Enter password'></input>
                </div>
              </div>
              <div id='btn-div'>
                <button className='Ls-int' type='submit'>Login</button>
              </div>
            </form>
            <NavLink to={"/sign"} className="ls-link">Don't have an account? Sign up</NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login;