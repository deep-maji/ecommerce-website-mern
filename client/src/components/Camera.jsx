import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import CateNavs from '../components/CateNavs';
import { NavLink } from "react-router-dom";
import '../styles/CategoryCard.css'
import axios from "axios";

export const Camera = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);

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
        const cameraProducts = res.data.filter(item => item.category?.toLowerCase() === "camera");
        setProducts(cameraProducts);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div id="add-to-cart-noti" className={visible ? "show" : ""}>
          1 item is added to cart
        </div>
        <div id="cate-noti">
          <h4>Category - Cameras</h4>
        </div>

        <div id="Products">
          <div id="cate-left">
            <CateNavs/>
          </div>

          <div id="cate-right" className="container-fluid">
            <div className="row">
              {products.length > 0 ? (
                products.map((product, index) => (
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
                ))
              ) : (
                <p style={{ textAlign: "center", marginTop: "20px" }}>No camera products found.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Camera;
