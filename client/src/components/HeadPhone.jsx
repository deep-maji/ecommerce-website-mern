import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import CateNavs from '../components/CateNavs';
import axios from "axios";
import '../styles/CategoryCard.css';

export const Headphone = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const showCartNoti = async (e) => {
    let token = localStorage.getItem("authToken");
    if (token) {
      const userSelectedItem = e.target.parentElement.parentElement.parentElement;
      const productId = userSelectedItem.getAttribute("id");

      try {
        let res = await axios.post(
          "https://ecommerce-server-p79x.onrender.com/cart",
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

  // Fetch only headphone category products
  useEffect(() => {
    axios.get("https://ecommerce-server-p79x.onrender.com/product")
      .then((res) => {
        const headphoneProducts = res.data.filter(
          (item) => item.category.toLowerCase() === "headphone"
        );
        setProducts(headphoneProducts);
      })
      .catch((err) => {
        console.error("Error fetching headphones:", err);
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

        {/* Heading */}
        <div id="cate-noti">
          <h4>Category - Headphones</h4>
        </div>

        <div id="Products">
          {/* Left side category icons */}
          <div id="cate-left">
            <CateNavs/>
          </div>

          {/* Right side products */}
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

              {products.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                  No headphones found.
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

export default Headphone;
