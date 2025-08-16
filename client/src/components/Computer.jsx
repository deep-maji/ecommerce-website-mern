import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import CC0 from '../assets/images/CC0.svg';
import CC1 from '../assets/images/CC1.svg';
import CC2 from '../assets/images/CC2.svg';
import CC3 from '../assets/images/CC3.svg';
import CC4 from '../assets/images/CC4.svg';
import CC5 from '../assets/images/CC5.svg';
import { NavLink } from "react-router-dom";
import '../styles/CategoryCard.css';

export const Computer = () => {
  const [visible, setVisible] = useState(false);
  const [computers, setComputers] = useState([]);

  const showCartNoti = async (e) => {
    let token = localStorage.getItem("authToken");
    if (token) {
      const userSelectedItem = e.target.parentElement.parentElement.parentElement;
      const productId = userSelectedItem.getAttribute("id");
      
      try {
        let res = await axios.post(
          "http://localhost:3000/cart",
          {
            productId: productId,
            quantity: 1
          },
          {
            headers: {
              Authorization: token
            }
          }
        );
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
        }, 2000);
      } catch (error) {
        console.log("Add to cart error : ", error);
      }
    }
    else {
      alert("Please log in to continue.");
    }

  };

  useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then(res => {
        // Filter products where category is "computer"
        const filtered = res.data.filter(item =>
          item.category?.toLowerCase() === "computer"
        );
        setComputers(filtered);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div id="add-to-cart-noti" className={visible ? "show" : ""}>
          1 item is added to cart
        </div>
        <div id="cate-noti">
          <h4>Category - Computers</h4>
        </div>
        <div id="Products">
          <div id="cate-left">
            <NavLink to={'/category/phone'}><img className='ccimgs-cate' src={CC0} /></NavLink>
            <NavLink to={'/category/headphone'}><img className='ccimgs-cate' src={CC1} /></NavLink>
            <NavLink to={'/category/gaming'}><img className='ccimgs-cate' src={CC2} /></NavLink>
            <NavLink to={'/category/camera'}><img className='ccimgs-cate' src={CC3} /></NavLink>
            <NavLink to={'/category/computer'}><img className='ccimgs-cate' src={CC4} /></NavLink>
            <NavLink to={'/category/watch'}><img className='ccimgs-cate' src={CC5} /></NavLink>
          </div>

          <div id="cate-right" className="container-fluid">
            <div className="row">
              {computers.map((product, index) => (
                <div id={product._id.toString()} key={product._id || index} className="col-lg-3 col-md-6 col-12">
                  <div id="card">
                    <div id="card-img">
                      <img src={`http://localhost:3000/${product.image}`} alt={product.name} />
                    </div>
                    <div id="card-title">
                      <p>{product.name}</p>
                    </div>
                    <div id="card-price">
                      <p>{product.price}</p>
                    </div>
                    <div id="card-btn">
                      <button onClick={showCartNoti}>Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Computer;
