import Navbar from './navbar';
import Footer from './footer';
import iphone14pro1 from '../assets/images/iphone14pro1.svg';
import '../styles/Cart.css';
import { NavLink } from 'react-router-dom';

export const Cart = () => {
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
              <div id='cart-card'>
                <div id='cart-img'>
                  <img src={iphone14pro1}></img>
                </div>
                <div id='cart-des'>
                  <div id='cart-info'>
                    <p>Apple iPhone 14 Pro Max</p>
                  </div>
                  <div id='cart-qaun'>
                    <button>-</button>
                    <input type='number'></input>
                    <button>+</button>
                  </div>
                  <div id='cart-price'>
                    <p>456</p>
                  </div>
                  <div id='cart-remove'>Remove</div>
                </div>
              </div>
              <div id='cart-card'>
                <div id='cart-img'>
                  <img src={iphone14pro1}></img>
                </div>
                <div id='cart-des'>
                  <div id='cart-info'>
                    <p>Apple iPhone 14 Pro Max</p>
                  </div>
                  <div id='cart-qaun'>
                    <button>-</button>
                    <input type='number'></input>
                    <button>+</button>
                  </div>
                  <div id='cart-price'>
                    <p>456</p>
                  </div>
                  <div id='cart-remove'>Remove</div>
                </div>
              </div>
            </div>
          </div>
          <div id='cart-right'>

            <div className="order-summary-container" role="region" aria-label="Order Summary">
              <h2 className="title">Order Summary</h2>

              <form
                className="promo-card-form"
              >
                <label htmlFor="promoCode" className="label">
                  Discount code / Promo code
                </label>
                <br></br>
                <input
                  type="text"
                  id="promoCode"
                  name="promoCode"
                  className="input-text"
                  placeholder="Code"
                />
                <br></br>

                <label htmlFor="bonusCard" className="label bonus-label">
                  Your bonus card number
                </label>
                <div className="bonus-input-wrapper">
                  <input
                    type="text"
                    id="bonusCard"
                    name="bonusCard"
                    className="input-text bonus-input"
                    placeholder="Enter Card Number"
          
                  />
                  <button
                    type="submit"
                    className="btn-apply"
                    aria-label="Apply bonus card number"
                  >
                    Apply
                  </button>
                </div>
              </form>

              <div className="summary-details" aria-live="polite">
                <div className="summary-row subtotal">
                  <span>Subtotal</span>
                  <span>${}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated Tax</span>
                  <span>${}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated shipping &amp; Handling</span>
                  <span>${}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${}</span>
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
  )
}


export default Cart;