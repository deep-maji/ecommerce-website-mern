import Navbar from './navbar';
import Footer from './footer';
import iphone14pro1 from '../assets/images/iphone14pro1.svg';
import '../styles/Cart.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Cart = () => {
  // Fake cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Apple iPhone 14 Pro Max',
      price: 456,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Apple iPhone 14 Pro Max',
      price: 456,
      quantity: 1,
    }
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta), // min quantity is 1
            }
          : item
      )
    );
  };

  const handleInputChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1); // default to 1 if invalid
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Order Summary Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = +(subtotal * 0.1).toFixed(2); // 10% tax
  const shipping = subtotal > 0 ? 50 : 0; // ₹50 shipping if there are items
  const total = subtotal + tax + shipping;

  return (
    <>
      <Navbar />
      <main>
        <div id='cart-Wraper'>
          <div id='cart-left'>
            <div id='left-heading'>
              <h5>Shopping Cart</h5>
            </div>
            <div id='cart-card-warpper'>
              {cartItems.map((item) => (
                <div id='cart-card' key={item.id}>
                  <div id='cart-img'>
                    <img src={iphone14pro1} alt="product" />
                  </div>
                  <div id='cart-des'>
                    <div id='cart-info'>
                      <p>{item.name}</p>
                    </div>
                    <div id='cart-qaun'>
                      <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <input
                        type='number'
                        value={item.quantity}
                        onChange={(e) => handleInputChange(item.id, e.target.value)}
                      />
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                    <div id='cart-price'>
                      <p>₹{item.price * item.quantity}</p>
                    </div>
                    <div id='cart-remove' onClick={() => removeItem(item.id)}>Remove</div>
                  </div>
                </div>
              ))}
              {cartItems.length === 0 && <p style={{ padding: '20px' }}>Your cart is empty.</p>}
            </div>
          </div>

          <div id='cart-right'>
            <div className="order-summary-container" role="region" aria-label="Order Summary">
              <h2 className="title">Order Summary</h2>

              <form className="promo-card-form">
                <label htmlFor="promoCode" className="label">Discount code / Promo code</label>
                <input type="text" id="promoCode" name="promoCode" className="input-text" placeholder="Code" />

                <label htmlFor="bonusCard" className="label bonus-label">Your bonus card number</label>
                <div className="bonus-input-wrapper">
                  <input type="text" id="bonusCard" name="bonusCard" className="input-text bonus-input" placeholder="Enter Card Number" />
                  <button type="submit" className="btn-apply">Apply</button>
                </div>
              </form>

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

              <button className="btn-checkout" aria-label="Proceed to checkout">Checkout</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
