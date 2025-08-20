import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import CateNavs from '../components/CateNavs';
import axios from "axios";
import '../styles/CategoryCard.css';

export const Phone = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);

  // Show "Added to cart" notification
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
      alert("User not login.");
    }

  };

  // Fetch products with axios
  useEffect(() => {
    axios.get("http://localhost:3000/product")
      .then((res) => {
        const mobileProducts = res.data.filter(
          (item) => item.category.toLowerCase() === "watch"
        );
        setProducts(mobileProducts);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Notification */}
        <div id="add-to-cart-noti" className={visible ? "show" : ""}>
          1 item is added to cart
        </div>

        {/* Category heading */}
        <div id="cate-noti">
          <h4>Category - Watches</h4>
        </div>

        <div id="Products">
          {/* Left category icons */}
          <div id="cate-left">
            <CateNavs/>
          </div>

          {/* Right product cards */}
          <div id="cate-right" className="container-fluid">
            <div className="row">
              {products.map((product, index) => (
                <div className="col-lg-3 col-md-6 col-12" id={product._id.toString()} key={product._id || index}>
                  <div id="card">
                    <div id="card-img">
                      <img src={`${product.image}`} alt={product.name} />
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

              {/* Show message if no mobile products */}
              {products.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                  No watch products found.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Phone;
