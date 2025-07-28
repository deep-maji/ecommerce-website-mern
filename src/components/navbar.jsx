// import { logo } from "../assets/images/Logo.png";

export const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div id="logo-div" className="logo">
                        {/* <img alt="logo" src={{logo}}></img> */}
                    </div>
                    <div id="searchbar-div"></div>
                    <div id="actions"></div>
                    <div id="user-actions"></div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;