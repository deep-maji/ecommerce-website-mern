import Navbar from "./navbar";
import Footer from "./footer";
import CC0 from '../assets/images/CC0.svg'
import CC1 from '../assets/images/CC1.svg'
import CC2 from '../assets/images/CC2.svg'
import CC3 from '../assets/images/CC3.svg'
import CC4 from '../assets/images/CC4.svg'
import CC5 from '../assets/images/CC5.svg'
import { NavLink } from "react-router-dom";
import ps51 from '../assets/images/ps51.png';
import '../styles/CategoryCard.css'

export const Gaming = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="Products">
          <div id="cate-left">
            <h4>Category</h4>
            <NavLink to={'/category/phone'}><img className='ccimgs-cate' src={CC0}></img></NavLink>
            <NavLink to={'/category/headphone'}><img className='ccimgs-cate' src={CC1}></img></NavLink>
            <NavLink to={'/category/gaming'}><img className='ccimgs-cate' src={CC2}></img></NavLink>
            <NavLink to={'/category/camera'}><img className='ccimgs-cate' src={CC3}></img></NavLink>
            <NavLink to={'/category/computer'}><img className='ccimgs-cate' src={CC4}></img></NavLink>
            <NavLink to={'/category/watch'}><img className='ccimgs-cate' src={CC5}></img></NavLink>
          </div>
          <div id="cate-right" className="container-fluid">
            <h5>Gaming</h5>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={ps51}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony PlayStation5 Gaming Console (Slim)</p>
                  </div>
                  <div id="card-price">
                    <p>52,490</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={ps51}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony PlayStation5 Gaming Console (Slim)</p>
                  </div>
                  <div id="card-price">
                    <p>52,490</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={ps51}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony PlayStation5 Gaming Console (Slim)</p>
                  </div>
                  <div id="card-price">
                    <p>52,490</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={ps51}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony PlayStation5 Gaming Console (Slim)</p>
                  </div>
                  <div id="card-price">
                    <p>52,490</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={ps51}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony PlayStation5 Gaming Console (Slim)</p>
                  </div>
                  <div id="card-price">
                    <p>52,490</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Gaming;