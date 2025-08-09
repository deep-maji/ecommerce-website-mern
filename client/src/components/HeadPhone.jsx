import Navbar from "./navbar";
import Footer from "./footer";
import { useState } from "react";
import CC0 from '../assets/images/CC0.svg'
import CC1 from '../assets/images/CC1.svg'
import CC2 from '../assets/images/CC2.svg'
import CC3 from '../assets/images/CC3.svg'
import CC4 from '../assets/images/CC4.svg'
import CC5 from '../assets/images/CC5.svg'
import { NavLink } from "react-router-dom";
import headphone1 from '../assets/images/headphone1.png';
import '../styles/CategoryCard.css'

export const Headphone = () => {
  const [visible, setVisible] = useState(false);

  const showCartNoti = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  return (
    <>
      <Navbar />
      <main>
        <div id="add-to-cart-noti" className={visible ? "show" : ""}>1 item is added to cart</div>
        <div id="cate-noti">
          <h4>Category - Headphones</h4>
        </div>
        <div id="Products">
          <div id="cate-left">
            <NavLink to={'/category/phone'}><img className='ccimgs-cate' src={CC0}></img></NavLink>
            <NavLink to={'/category/headphone'}><img className='ccimgs-cate' src={CC1}></img></NavLink>
            <NavLink to={'/category/gaming'}><img className='ccimgs-cate' src={CC2}></img></NavLink>
            <NavLink to={'/category/camera'}><img className='ccimgs-cate' src={CC3}></img></NavLink>
            <NavLink to={'/category/computer'}><img className='ccimgs-cate' src={CC4}></img></NavLink>
            <NavLink to={'/category/watch'}><img className='ccimgs-cate' src={CC5}></img></NavLink>
          </div>
          <div id="cate-right" className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={headphone1}></img>
                  </div>
                  <div id="card-title">
                    <p>JBL Tune 770NC Wireless Over Ear ANC Headphones</p>
                  </div>
                  <div id="card-price">
                    <p>4,999</p>
                  </div>
                  <div id="card-btn">
                    <button onClick={showCartNoti}>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={headphone1}></img>
                  </div>
                  <div id="card-title">
                    <p>JBL Tune 770NC Wireless Over Ear ANC Headphones</p>
                  </div>
                  <div id="card-price">
                    <p>4,999</p>
                  </div>
                  <div id="card-btn">
                    <button onClick={showCartNoti}>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={headphone1}></img>
                  </div>
                  <div id="card-title">
                    <p>JBL Tune 770NC Wireless Over Ear ANC Headphones</p>
                  </div>
                  <div id="card-price">
                    <p>4,999</p>
                  </div>
                  <div id="card-btn">
                    <button onClick={showCartNoti}>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={headphone1}></img>
                  </div>
                  <div id="card-title">
                    <p>JBL Tune 770NC Wireless Over Ear ANC Headphones</p>
                  </div>
                  <div id="card-price">
                    <p>4,999</p>
                  </div>
                  <div id="card-btn">
                    <button onClick={showCartNoti}>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div id="card">
                  <div id="card-img">
                    <img src={headphone1}></img>
                  </div>
                  <div id="card-title">
                    <p>JBL Tune 770NC Wireless Over Ear ANC Headphones</p>
                  </div>
                  <div id="card-price">
                    <p>4,999</p>
                  </div>
                  <div id="card-btn">
                    <button onClick={showCartNoti}>Buy Now</button>
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

export default Headphone;