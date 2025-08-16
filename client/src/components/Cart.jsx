import Navbar from './navbar';
import Footer from './footer';
import '../styles/Cart.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleInputChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1);
    setCartItems((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Order Summary Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );
  const tax = +(subtotal * 0.1).toFixed(2);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + tax + shipping;

  const getUserProduct = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        let res = await axios.get("http://localhost:3000/cart", {
          headers: {
            Authorization: `${token}`,
          },
        });

        if (res.data.cart) {
          setCartItems(res.data.cart);
        } else {
          setCartItems([]); // empty cart case
        }
      }
    } catch (error) {
      console.log(`Cart error. ${error}`);
    }
  };

  useEffect(() => {
    getUserProduct();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div id="cart-Wraper">
          <div id="cart-left">
            <div id="left-heading">
              <h5>Shopping Cart</h5>
            </div>
            <div id="cart-card-warpper">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div id="cart-card" key={item._id}>
                    <div id="cart-img">
                      <img
                        src={item.productId.image}
                        alt={item.productId.name}
                      />
                    </div>
                    <div id="cart-des">
                      <div id="cart-info">
                        <p>{item.productId.name}</p>
                      </div>
                      <div id="cart-qaun">
                        <button onClick={() => handleQuantityChange(item._id, -1)}>
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleInputChange(item._id, e.target.value)
                          }
                        />
                        <button onClick={() => handleQuantityChange(item._id, 1)}>
                          +
                        </button>
                      </div>
                      <div id="cart-price">
                        <p>₹{item.productId.price * item.quantity}</p>
                      </div>
                      <div id="cart-remove" onClick={() => removeItem(item._id)}>
                        Remove
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ padding: "20px" }}>Your cart is empty.</p>
              )}
            </div>
          </div>

          <div id="cart-right">
            <div
              className="order-summary-container"
              role="region"
              aria-label="Order Summary"
            >
              <h2 className="title">Order Summary</h2>

              <div className="summary-details" aria-live="polite">
                <div className="summary-row subtotal">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated Tax (10%)</span>
                  <span>₹{tax}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="summary-row subtotal">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button className="btn-checkout" aria-label="Proceed to checkout">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
