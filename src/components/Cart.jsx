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
          <div id='cart-right'></div>
        </div>
      </main>
      <Footer />
    </>
  )
}


export default Cart;