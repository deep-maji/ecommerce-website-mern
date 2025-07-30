import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import SearchIcon from "../assets/images/Search.svg";
import Fav from "../assets/images/Favorites.svg";
import User from "../assets/images/User.svg";
import Cart from "../assets/images/Cart.svg";
import Burger from "../assets/images/Burger.svg";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div id="logo">
            <a href="/"><img src={Logo} alt="Logo"></img></a>
          </div>
          <div id="searchbar">
            <div id="Search-icon-div">
              <label htmlFor="search">
                <img id="search-icon" src={SearchIcon} alt="searchIcon"></img>
              </label>
            </div>
            <div id="search-bar-div">
              <form action="">
                <input type="text" id="search" name="search" placeholder="Search"></input>
              </form>
            </div>
          </div>
          <div id="actions">
            <a href="/" className="action-btn nav-active"><div>Home</div></a>
            <a href="#" className="action-btn"><div>About</div></a>
            <a href="#" className="action-btn"><div>Contact Us</div></a>
            <a href="#" className="action-btn"><div>Blog</div></a>
          </div>
          <div id="user-actions">
            <div id="wish" className="user-actions-btns">
              <a href="#"><img src={Fav} alt="fav"></img></a>
            </div>
            <div id="cart" className="user-actions-btns">
              <a href="#"><img src={Cart} alt="cart"></img></a>
            </div>
            <div id="user" className="user-actions-btns">
              <a href="/Sign"><img src={User} alt="user"></img></a>
            </div>
          </div>
          <div id="burger-menu">
            <img src={Burger} alt="menu"></img>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;