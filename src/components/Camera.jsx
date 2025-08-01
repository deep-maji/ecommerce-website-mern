import Navbar from "./navbar";
import Footer from "./footer";
import CC0 from '../assets/images/CC0.svg'
import CC1 from '../assets/images/CC1.svg'
import CC2 from '../assets/images/CC2.svg'
import CC3 from '../assets/images/CC3.svg'
import CC4 from '../assets/images/CC4.svg'
import CC5 from '../assets/images/CC5.svg'
import { NavLink } from "react-router-dom";
import camera1 from '../assets/images/camera1.png';
import '../styles/CategoryCard.css'

export const Camera = () => {
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
            <h5>Cameras</h5>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={camera1}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony Alpha ILCE-7M4K Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera</p>
                  </div>
                  <div id="card-price">
                    <p>2,30,989</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={camera1}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony Alpha ILCE-7M4K Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera</p>
                  </div>
                  <div id="card-price">
                    <p>2,30,989</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={camera1}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony Alpha ILCE-7M4K Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera</p>
                  </div>
                  <div id="card-price">
                    <p>2,30,989</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={camera1}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony Alpha ILCE-7M4K Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera</p>
                  </div>
                  <div id="card-price">
                    <p>2,30,989</p>
                  </div>
                  <div id="card-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={camera1}></img>
                  </div>
                  <div id="card-title">
                    <p>Sony Alpha ILCE-7M4K Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera</p>
                  </div>
                  <div id="card-price">
                    <p>2,30,989</p>
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

export default Camera;