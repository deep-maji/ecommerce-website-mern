import Logo from "../assets/images/Logo.svg";
import SearchIcon from "../assets/images/Search.svg";
import Fav from "../assets/images/Favorites.svg";
import User from "../assets/images/User.svg";
import Cart from "../assets/images/Cart.svg";
import "../assets/styles/navbar.css";

export const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div id="logo">
                        <img src={Logo} alt="Logo"></img>
                    </div>
                    <div id="searchbar">
                        <div id="Search-icon-div">
                            <label htmlFor="search">
                                <img src={SearchIcon} alt="searchIcon"></img>
                            </label>
                        </div>
                        <div id="search-bar-div">
                            <form action="">
                                <input type="text" id="search" name="search" placeholder="Search"></input>
                            </form>
                        </div>
                    </div>
                    <div id="actions">
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact US</div>
                        <div>Blog</div>
                    </div>
                    <div id="user-actions">
                        <div id="wish">
                            <img src={Fav} alt="fav"></img>
                        </div>
                        <div id="cart">
                            <img src={Cart} alt="cart"></img>
                        </div>
                        <div id="user">
                            <img src={User} alt="user"></img>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;