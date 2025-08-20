import '../styles/Banner.css'
import BannerPhoneImg from '../assets/images/BannerPhoneImg.svg'
import Banner2 from '../assets/images/Banner2.svg'
import Banner3 from '../assets/images/Banner3.svg'
import Banner4 from '../assets/images/B4.svg'
import Banner5 from '../assets/images/B5.svg'
import Banner6 from '../assets/images/B6.svg'
import Banner7 from '../assets/images/B7.svg'
import { NavLink } from "react-router-dom";

export const BannerOne = () => {
    return (
        <>
            <div id="banner">
                <div id="left">
                    <p>Pro.Beyond.</p>
                    <h1>IPhone 14 Pro</h1>
                    <p>Created to change everything for the better. For everyone</p>
                    <NavLink to={'/category/phone'}><button>Shop</button></NavLink>
                </div>
                <div id="right">
                    <img src={BannerPhoneImg}></img>
                </div>
            </div>
        </>
    )
}

export const BannerTwo = () => {
    return (
        <>
            <div className='banner-two-div'>
                <NavLink to={'/category/phone'}><img src={Banner2}></img></NavLink>
            </div>
        </>
    )
}

export const BannerThree = () => {
    return (
        <>
            <div id='banner-three-div'>
                <div id='banner-three-left'>
                    <div id='banner-three-left-top'>
                        <div id='banner-left-one'>
                            <NavLink to={'/category/gaming'}><img src={Banner4}></img></NavLink>
                        </div>
                    </div>
                    <div id='banner-three-left-bottom'>
                        <div id='banner-left-two'>
                            <NavLink to={'/category/headphone'}><img src={Banner5}></img></NavLink>
                        </div>
                        <div id='banner-left-three'>
                            <NavLink to={'/category/phone'}><img src={Banner6}></img></NavLink>
                        </div>
                    </div>
                </div>
                <div id='banner-three-right'>
                    <NavLink to={'/category/computer'}><img src={Banner7}></img></NavLink>
                </div>
            </div>
        </>
    )
}

export default { BannerOne, BannerTwo, BannerThree };